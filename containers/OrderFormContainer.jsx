import React, { useState, useEffect, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import OrderForm from "../components/OrderForm";
import { Context } from "../context";

const OrderFormContainer = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [squareCard, setSquareCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("stripe");
  const appId = "sandbox-sq0idb-RT3u-HhCpNdbMiGg5aXuVg";
  const locationId = "TC4Z3ZEBKRXRH";
  let isSquareCardAttached;
  let squareCardPayment;

  const [message, setMessage] = useState("");
  const [paymentType, setPaymentType] = useState("stripe");
  const [clientOrigin, setClientOrigin] = useState("http://localhost:3000");
  const [globalState, setGlobalState] = useContext(Context);
  const { high_risk } = globalState;

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
    bump: true,
    external: "SHOPIFY"
  };

  useEffect(() => {
    setClientOrigin(window.location.origin);
    if (!window.Square) {
      return;
      // throw new Error("Square.js failed to load properly");
    }
    try {
      const payments = window.Square.payments(appId, locationId);
      initializeSquareCard(payments);
    } catch {
      setStatus("missing-credentials");
      return;
    }
  }, []);

  async function initializeSquareCard(payments) {
    try {
      if (!isSquareCardAttached) {
        isSquareCardAttached = true;
        squareCardPayment = await payments.card();
        await squareCardPayment.attach("#card-container");

        setSquareCard(cardPayment);
      }
    } catch (e) {
      console.error("Initializing Square Card failed", e);
      return;
    }
  }

  // Checkpoint 2.
  async function handlePaymentMethodSubmission(event) {
    event.preventDefault();

    try {
      // disable the submit button as we await tokenization and make a payment request.
      setIsLoading(true);
      const token = await tokenize();
      const paymentResults = await createPayment(token);
      setStatus("is-success");
      console.debug("Payment Success", paymentResults);
    } catch (e) {
      setIsLoading(false);
      setStatus("is-failure");
      console.error(e.message);
    }
  }

  async function createPayment(token) {
    const body = JSON.stringify({
      locationId,
      sourceId: token,
    });

    console.log("cool.ing");
    const paymentResponse = await fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (paymentResponse.ok) {
      return paymentResponse.json();
    }

    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
  }

  async function tokenize() {
    const tokenResult = await squareCard.tokenize();
    if (tokenResult.status === "OK") {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }

      throw new Error(errorMessage);
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!stripe || !elements) return;

      setIsLoading(true);

      const updatedState = createNewState(values); // update global state with the order data
      const queryString = objectToQueryString(updatedState); // get the query string from new state

      setTimeout(() => {
        fetchCustomerData(values); // simulate a delay
      }, 0);

      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: `${clientOrigin}/upsell?${queryString}`,
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
    console.log(payload)
    // Make the request to the server to store the card after a successful submission
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/checkout/quick",
      payload
    );
    if (!response) {
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
        variant_id: 42235971567788,
        quantity: 1,
      },
      bump,
      high_risk,
      funnel_uuid,
      external: "SHOPIFY"
    };
    return payload;
  };

  function createNewState(values) {
    const { title, price_num, price_str, piece } = values.product;

    const newState = {
      ...globalState,
      bump: values.bump,
      products: [{ title, price_num, price_str, piece }],
    };

    setGlobalState(newState);
    return newState;
  }

  const objectToQueryString = (data) => {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object") {
        params.append(key, JSON.stringify(value));
      } else {
        params.append(key, value);
      }
    });
    return params.toString();
  };

  return (
    <OrderForm
      paymentType={paymentType}
      setPaymentType={setPaymentType}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      message={message}
      stripe={stripe}
      elements={elements}
      handlePaymentMethodSubmission={handlePaymentMethodSubmission}
      status={status}
      high_risk={high_risk}
    />
  );
};

export default OrderFormContainer;
