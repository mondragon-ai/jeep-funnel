import { imPoweredRequest } from "../lib/request";
import SignupForm from "../components/SignupForm";
import { setCustomer } from "../reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";

const SignupFormContainer = () => {
  const { customer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const initialValues = {
    first_name: "",
    email: "",
    accept_email_marketing: true,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(setCustomer({ isPending: true }));
    const payload = {
      values,
      funnel_uuid: "fun_7626c00357",
      high_risk: false,
    };
    const response = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/customers/create",
      payload
    );
    if (!response) {
      dispatch(setCustomer({ error: true }));
    } else {
      const { first_name, email } = values;
      dispatch(setCustomer({ first_name, email, ...response.result }));
    }
    setSubmitting(false);
  };

  return (
    <SignupForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      isLoading={customer.isPending}
    />
  );
};

export default SignupFormContainer;

// const [customer, setCustomer] = useState({
//   isPending: false,
//   STRIPE_CLIENT_ID:
//     "seti_1MNb2CE1N4ioGCdRrSDAS5DK_secret_N7qjJFOjn11qJ16I6rZeEshKbdimKti",
//   error: null,
// });
