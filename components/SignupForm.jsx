import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyImage from "./MyImage";

const validationSchema = Yup.object({
  first_name: Yup.string().required("Name is required! "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required! "),
  accept_email_marketing: Yup.boolean()
    .required()
    .oneOf([true], "Please check the box to continue!"),
});

const SignupForm = ({ onSignup, isLoading }) => {
  const initialValues = {
    first_name: "",
    email: "",
    accept_email_marketing: true,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    await onSignup(values);
    setSubmitting(false);
  };

  return (
    <div className="formcard" id="FORM_ONE">
      <div>
        <MyImage src="/images/wtb-wb-dtom-decal.png" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="div-block-37">
            <div className="input-group">
              <Field
                className="form-control"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
              />
              <label htmlFor="first_name">First Name</label>
              <div className="req-mark">!</div>
            </div>
            <div className="input-group">
              <Field
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
              <div className="req-mark">!</div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                gap: 10,
                margin: "10px 0",
              }}
            >
              <ErrorMessage name="form" component="div" id="ERROR" />
              <ErrorMessage name="first_name" component="div" id="ERROR" />
              <ErrorMessage name="email" component="div" id="ERROR" />
            </div>
            <ErrorMessage
              name="accept_email_marketing"
              component="div"
              id="ERROR"
              style={{ fontSize: 14, margin: "10px 0" }}
            />
          </div>
          <div className="checkboxtextcontainer">
            <div className="checkbox">
              <Field
                type="checkbox"
                name="accept_email_marketing"
                id="accept_email_marketing"
              />
            </div>
            <div>
              <div className="text-block-5">
                I agree to the Terms of Service and Privacy Policy. I agree to
                receive news, updates, exclusive offers.
              </div>
            </div>
          </div>
          <button type="submit" id="FORM_ONE_BTN" className="funnelbtn">
            <h4 className="btntext">
              {isLoading ? "Loading . . ." : "ENTER NOW"}
            </h4>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;

{
  /* <div className="div-block-37">
<div className="input-group">
  <input
    defaultValue=""
    className="form-control"
    type="text"
    name="first_name"
    id="first_name"
    required
    placeholder="First Name"
  />
  <label htmlFor="first_name">First Name</label>
  <div className="req-mark">!</div>
</div>
<div className="input-group">
  <input
    defaultValue=""
    className="form-control"
    type="text"
    name="email"
    id="email"
    required
    placeholder="Email"
  />
  <label htmlFor="email">Email</label>
  <div className="req-mark">!</div>
</div>
<div>
  <p id="ERROR" />
</div>
</div>
<div className="checkboxtextcontainer">
<div className="checkbox">
  <input
    type="checkbox"
    name="accept_email_marketing"
    id="accept_email_marketing"
    defaultChecked
  />
</div>
<div>
  <div className="text-block-5">
    I agree to the Terms of Service and Privacy Policy. I agree to
    receive news, updates, exclusive offers.
  </div>
</div>
</div>
<div id="FORM_ONE_BTN" className="funnelbtn">
<h4 className="btntext">ENTER NOW</h4>
</div> */
}
