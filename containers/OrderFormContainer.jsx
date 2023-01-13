import React, { useState, useEffect, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import OrderForm from "../components/OrderForm";
import { Context } from "../context";

const OrderFormContainer = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [clientOrigin, setClientOrigin] = useState("http://localhost:3000");
  const [globalState, setGlobalState] = useContext(Context);

  const initialValues = {
    product: {
      title: "30 GIVEAWAY ENTRIES (BEST DEAL!!)",
      price_str: "$5.00 / pc",
      price_num: 5000,
      piece: "6 Products (3 Wristbands/3 Decals) Save 30%",
      product_id: "42235974189228",
    },
    shipping: {
      line1: "",
      state: "",
      city: "",
      zip: "",
    },
    bump: false,
  };

  useEffect(() => {
    setClientOrigin(window.location.origin);
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);

      if (!stripe || !elements) {
        throw new Error("stripe or elements are not present");
      }

      updateGlobalState(values); // update global state with the order data

      setTimeout(() => {
        fetchCustomerData(values); // simulate a delay
      }, 0);

      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: `${clientOrigin}/upsell`,
        },
      });

      if (error) throw new Error(error.message);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const fetchCustomerData = async (order) => {
    const payload = createPayloadFromOrder(order);
    // Make the request to the server to store the card after a successful submission
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/checkout/quick",
      payload
    );

    if (!response) {
      updateGlobalState(); // update global state with the order data
      setMessage(
        `We're sorry, but there was an issue processing your payment. Please try resubmitting the form or refreshing the page and trying again.`
      );
    }
  };

  const createPayloadFromOrder = (order) => {
    const { product, shipping, bump } = order;
    const { line1, state, city, zip } = shipping;
    const { title, price_num, product_id } = product;
    const { cus_uuid, first_name, high_risk, funnel_uuid } = globalState;
    const payload = {
      cus_uuid,
      shipping: {
        type: "BOTH",
        line1,
        line2: "",
        city,
        state,
        zip,
        country: "US",
        name: first_name,
        title: "Home",
      },
      product: {
        high_risk: true,
        title,
        price: price_num,
        product_id,
        sku: "D8-kUSH-GUM",
        compare_at_price: 0,
        handle: "delta-8-strawberry-gummies",
        option1: "4-Pack",
        option2: "",
        option3: "",
        weight: 0.1,
      },
      bump,
      high_risk,
      funnel_uuid,
    };
    return payload;
  };

  const updateGlobalState = (order = {}) => {
    const { product = {}, bump = false } = order;
    const { title, price_num, price_str, piece } = product;

    setGlobalState({
      ...globalState,
      bump,
      products: isOrderEmpty(order)
        ? []
        : [{ title, price_num, price_str, piece }],
    });
  };

  const isOrderEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <OrderForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      message={message}
      stripe={stripe}
      elements={elements}
    />
  );
};

export default OrderFormContainer;
