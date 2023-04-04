import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyImage from "./MyImage";
// import CountdownTimer from "../components/countdown"

const validationSchema = Yup.object({
  first_name: Yup.string().required("Name is required! "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required! "),
  accept_email_marketing: Yup.boolean()
    .required()
    .oneOf([true], "Please check the box to continue!"),
});


const SignupForm = ({ initialValues, handleSubmit, isLoading, timeLeft }) => {
  return (
    <div className="formcard" id="FORM_ONE" 
    style={{
      background: "#CCCCCC",
      border: " none",
      boxShadow: "none",
      width: "100%",
      padding: "0",
      marginBottom: "0"
    }}>
      <div>
        <MyImage src={"/images/Entry_Tickets.png"} />
      </div>
      <div style={{
        display: "none",
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 1rem",
        textAlign: 'center',
        fontFamily: "Fjalla",
        marginTop: 0
      }}>
        <h1 style={{
          padding: "0rem 0 1rem 0",
          marginTop: 0
        }}>TIME LEFT</h1>
        {/* <CountdownTimer timeLeft={timeLeft} /> */}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{
              width: "100%",
            }}>
          <div className="div-block-37"
            style={{
              background: "#fff",
              border: " none",
              width: "100%",
              padding: "3rem 1rem 1rem 1rem"
            }}>
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
            <div className="input-group" 
                style={{
                  border: "1px solid black",
                  height: "50px"
                }}>
              <Field
                className="form-control"
                style={{
                  height: "50px"
                }}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email" 
                style={{
                  borderRadius: "6px",
                }}>Email</label>
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
          <div className="checkboxtextcontainer" 
            style={{
              background: "#fff",
              border: " none",
              width: "100%",
              padding: "0 1rem  1rem 1rem"
            }}>
            <div className="checkbox">
              <Field
                type="checkbox"
                name="accept_email_marketing"
                id="accept_email_marketing"
              />
            </div>
            <div>
              <div className="text-block-5" style={{
                fontSize: "12px",
                lineHeight: "12px",
              }}>
                I agree to the Terms of Service and Privacy Policy. I agree to
                receive news, updates, exclusive offers.
              </div>
            </div>
          </div>
          <div style={{
                width: "100%",
                background: "white",
                alignContent: "center",
                justifyContent: "center",
                display: "flex"
              }}>
            <button
              type="submit"
              id="FORM_ONE_BTN"
              className="funnelbtn"
              disabled={isLoading}
              style={{
                width: "95%",
                fontFamily: "Fjalla"
              }}
            >
              <h4 className="btntext" style={{
                background: "transparent",
                fontFamily: "Fjalla"
                }}>
                {isLoading ? "Loading . . ." : "ENTER NOW"}
              </h4>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
