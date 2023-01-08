import React, { useState, useEffect } from "react";
import { imPoweredRequest } from "../lib/request";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import OrderForm from "../components/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import { setIsPending, setMessage } from "../reducers/rootReducer";

function OrderFormContainer() {
  const stripe = useStripe();
  const elements = useElements();
  const { customer, isPending, message } = useSelector((state) => state);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    console.log(" This is the clientSecret", clientSecret);

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

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
    dispatch(setIsPending(true));
    const payload = createPayloadFromOrder(order);
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/checkout/quick",
      payload
    );
    if (!response) {
      setMessage("Could not fetch customer data");
    } else {
      // setCustomer(response.result);
      console.log(" => [CHARGE CARD - Fetch customer data]", response.result);
    }
    dispatch(setIsPending(false));
  };

  const createPayloadFromOrder = (order) => {
    const { product, shipping, bump } = order;
    const { line1, state, city, zip } = shipping;
    const { name, price, piece, product_id } = JSON.parse(product);
    const payload = {
      cus_uuid: customer.id,
      product: {
        high_risk: true,
        title: name,
        price,
        piece,
        product_id,
      },
      shipping: {
        type: "BOTH",
        line1,
        state,
        city,
        zip,
        country: "US",
        name: customer.first_name,
        title: "Home",
      },
      bump,
      high_risk: false,
      funnel_uuid: "fun_7626c00357",
    };
    return payload;
  };

  return (
    <OrderForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      isLoading={isPending}
      message={message}
      stripe={stripe}
      elements={elements}
    />
  );
}

export default OrderFormContainer;

