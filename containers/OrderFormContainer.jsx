import React, { useState, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import OrderForm from "../components/OrderForm";
import GlobalContext from "../context/globalContext";

function OrderFormContainer() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [globalState, setGlobalState] = useContext(GlobalContext);

  const initialValues = {
    product:
      '{ "name": "30 GIVEAWAY ENTRIES (BEST DEAL!!)", "price": "5000",  "piece": "$5.00 per pc", "product_id": "42235974189228" }',
    shipping: {
      line1: "",
      state: "",
      city: "",
      zip: "",
    },
    bump: false,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);

      if (!stripe || !elements) {
        throw new Error("stripe or elements are not present");
      }

      setTimeout(() => {
        fetchCustomerData(values); // simulate a delay
      }, 0);

      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/upsell",
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

    if (!response)
      setMessage(
        `We're sorry, but there was an issue processing your payment. Please try resubmitting the form or refreshing the page and trying again. If the problem persists, please contact our customer support team for assistance`
      );
  };

  const createPayloadFromOrder = (order) => {
    const { product, shipping, bump } = order;
    const { line1, state, city, zip } = shipping;
    const { name, price, product_id } = JSON.parse(product);
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
        title: name,
        price: Number(price),
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
    setGlobalState({ ...globalState, bump });
    return payload;
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
}

export default OrderFormContainer;
