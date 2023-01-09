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
    await fetchCustomerData(values);

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/upsell",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error")
      setMessage(error.message);
    else setMessage("An unexpected error occured.");

    setSubmitting(false);
  };

  const fetchCustomerData = async (order) => {
    setIsLoading(true);
    const payload = createPayloadFromOrder(order);
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/checkout/quick",
      payload
    );
    if (!response) {
      setMessage("Could not fetch customer data");
    } else {
      console.log(" => [CHARGE CARD - Fetch customer data]", response.result);
    }
    setIsLoading(false);
  };

  const createPayloadFromOrder = (order) => {
    const { product, shipping, bump } = order;
    const { line1, state, city, zip } = shipping;
    const { name, price, product_id } = JSON.parse(product);
    const { cus_uuid, first_name, high_risk, funnel_uuid } = globalState;
    const payload = {
      cus_uuid,
      product: {
        high_risk: true,
        title: name,
        price,
        product_id,
      },
      shipping: {
        type: "BOTH",
        line1,
        state,
        city,
        zip,
        country: "US",
        name: first_name,
        title: "Home",
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
