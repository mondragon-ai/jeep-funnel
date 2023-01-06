import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyImage from "./MyImage";

const SignupForm = () => (
  <div className="formcard" id="FORM_ONE">
    <div>
      <MyImage src="/images/wtb-wb-dtom-decal.png" />
    </div>
    <Formik
      initialValues={{
        first_name: "",
        email: "",
        accept_email_marketing: true,
      }}
      validationSchema={Yup.object({
        first_name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        accept_email_marketing: Yup.boolean(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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
            <ErrorMessage name="first_name" component="div" />
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
            <ErrorMessage name="email" component="div" />
          </div>
          <ErrorMessage name="form" component="div" id="ERROR" />
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
          <h4 className="btntext">ENTER NOW</h4>
        </button>
      </Form>
    </Formik>
  </div>
);

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
