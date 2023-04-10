import { useState, useContext, useEffect } from "react";
import { imPoweredRequest } from "../lib/request";
import SignupForm from "../components/SignupForm";
import { Context } from "../context";
import * as gtags from "../lib/analytics";
import * as crypto from "crypto";

const targetDate = new Date('2023-03-29T23:59:59');

const SignupFormContainer = () => {
  const [globalState, setGlobalState] = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const initialValues = {
    first_name: "",
    email: "",
    accept_email_marketing: true,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    const { first_name, email } = values;
    const { funnel_uuid, high_risk } = globalState;
    const payload = {
      customer: {
        first_name,
        email,
      },
      funnel_uuid,
      high_risk,
    };
    setGlobalState({
      ...globalState,
      email: email,
    });
    await gtags.event('conversion', {'send_to': 'AW-10793712364/xSshCNiBkpIYEOz165oo'});

    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/customers/create",
      payload
    );
    if (response) {
      console.log({ payload, result: response.result });
      const { STRIPE_CLIENT_ID, id } = response.result;
      setGlobalState({
        ...globalState,
        first_name,
        email: email,
        clientSecret: STRIPE_CLIENT_ID,
        cus_uuid: id,
      });
    }
    setIsLoading(false);
    setSubmitting(false);
  };

  return (
    <SignupForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      timeLeft={timeLeft}
    />
  );
};

export default SignupFormContainer;
