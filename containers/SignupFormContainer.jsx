import { useState, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import SignupForm from "../components/SignupForm";
import GlobalContext from "../context/globalContext";

const SignupFormContainer = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

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
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/customers/create",
      payload
    );
    if (response) {
      const { STRIPE_CLIENT_ID, id } = response.result;
      setGlobalState({
        ...globalState,
        first_name,
        email,
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
    />
  );
};

export default SignupFormContainer;
