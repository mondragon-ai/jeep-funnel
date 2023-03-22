import React, { useState, useEffect, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import OrderForm from "../components/OrderForm";
import { Context } from "../context";
import * as gtags from "../lib/analytics";
import * as crypto from "crypto";

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
  const [clientOrigin, setClientOrigin] = useState("127.0.0.1");
  const [globalState, setGlobalState] = useContext(Context);
  const { high_risk } = globalState;

  const initialValues = {
    product: {
      title: "Gold Entries ($150 Value) (BEST DEAL!!)",
      price_str: "$5.00 / pc",
      price_num: 5000,
      piece: "$150 value in products",
      options1: "Gold Entries ($150 Value)",
      options2: "M",
      product_id: "42235974189228"
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
      console.log("ONSUBIMT")
      console.log(updatedState);

      let payload = {
        bump: false,
        clientSecret: "",
        cus_uuid:"",
        email: "",
        external: "",
        first_name: "",
        funnel_uuid: "",
        high_risk: false,
        products: [],
        ...updatedState
      };

      const queryString = objectToQueryString({
        bump: payload.bump,
        clientSecret: payload.clientSecret,
        cus_uuid: payload.cus_uuid,
        email: payload.email,
        external: payload.external,
        first_name: payload.first_name,
        funnel_uuid: payload.funnel_uuid,
        high_risk: payload.high_risk,
        products: payload.products
      }); // get the query string from new state

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
    console.log(" ==> [PAYLOAD]")
    console.log(payload)

    const price =  payload.bump ? Number(payload.product.price )+ 399 : Number(payload.product.price);
    const conversion_price = price ? (price/100) : 0

    gtags.event('conversion', { 'send_to': 'AW-10793712364/Knd8CNuBkpIYEOz165oo', 'value': conversion_price, 'currency': 'USD', 'transaction_id': "txt_" + crypto.randomBytes(10).toString("hex").substring(0,10) });
    // Make the request to the server to store the card after a successful submission // http://127.0.0.1:5001/impowered-funnel/us-central1 // https://us-central1-impowered-funnel.cloudfunctions.net
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
    const { title, price_num } = product;
    const { cus_uuid, first_name, high_risk, funnel_uuid, variants } = globalState;
    console.log(" == [CREATE_PAYLOAD] => ")
    console.log(order)
    let variant_list = [...variants];

    let variant_id = "";
    let variant = {
      sku: "",
      options1: "",
      options2: "",
      options3: "",
      external_id: "",
      price: "",
      product_id: "",
      weight: "",
      high_risk: false
    };

    variant_list.filter((v)=> {
      if (v.options1 == product.options1 && v.options2 == product.options2) {
          console.log(v)
          variant_id = v.variant_id;
          variant = v
          return false
      } else {return true}
    });

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
        high_risk: variant.high_risk ? variant.high_risk : false,
        title,
        price: variant.price ? variant.price : (price_num || 0),
        product_id: variant.product_id ? variant.product_id : "",
        sku: variant.sku ? variant.sku : "HT-BOX",
        compare_at_price: 0,
        handle: String(title).toLocaleLowerCase().replaceAll(" ", "-"),
        options1: variant.options1 ? variant.options1 : "",
        options2: variant.options2 ? variant.options2 : "",
        options3: variant.options3 ? variant.options3 : "",
        weight: variant.weight ? ((variant.weight ) * 16 * 10) : 0,
        variant_id: variant.external_id  ? variant.external_id : variant_id ? variant_id : 7174179979436,
        quantity: 1,
        external_id: variant.external_id,
        external_type: variant.external_type,
      },
      bump,
      high_risk,
      funnel_uuid,
      external: "SHOPIFY"
    };
    return payload;
  };

  function createNewState(values) {
    const { title, price_num, price_str, piece, options1, options2} = values.product;

    console.log("CREATE NEW STATE")
    console.log(globalState)

    const oTwo = options2 !== "" && options2 !== undefined ? options2 : "M";
    const oOne = options1 ? options1 : "Bronze Entries ($60 Value)";

    const newState = {
      ...globalState,
      bump: values.bump,
      products: [{ title, price_num, price_str, piece, oOne, oTwo }],
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
