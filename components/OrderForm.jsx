import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ProductRow from "./ProductRow";
import CustomSelect from "./CustomSelect"
import { PaymentElement } from "@stripe/react-stripe-js";
import AddressInput from "./AddressInput";
import MyImage from "./MyImage";
// import SquareCard from "./SquareCard";

// import check_img from "../public/images/check.png"
const validationSchema = Yup.object().shape({
  shipping: Yup.object().shape({
    line1: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zip: Yup.number().required("Zip code is required"),
  }),
  bump: Yup.boolean(),
});

function OrderForm({
  initialValues,
  handleSubmit,
  handlePaymentMethodSubmission,
  status,
  isLoading,
  message,
  stripe,
  elements,
  high_risk,
}) {

  const [bump, setBump] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])


  return (
    <div className="formcard" id="FORM_TWO">
      <div className="imgblock">
        <MyImage src={"/images/entry.png"} />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="productcontainer">
              <div className="div-block-89">
                <div className="listheadertext">Item</div>
                <div className="listheadertext">Price</div>
              </div>
              <ProductRow
                title="Bronze Box (45 GIVEAWAY ENTRIES)"
                price_str="$45.00"
                price_num={4500}
                piece="$60 value in products"
                product_id="42235971567788"
                sku="HT-BOX"
                options1="Bronze Entries ($60 Value)"
              />
              <ProductRow
                title="Silver Box (60 GIVEAWAY ENTRIES)"
                price_str="$60.00"
                price_num={6000}
                piece="$85 value in products"
                options1="Silver Entries ($85 Value)"
                product_id="42235972780204"
              />
              <ProductRow
                title="Gold Box - 100 GIVEAWAY ENTRIES (BEST DEAL!!)"
                price_str="$100.00"
                price_num={10000}
                piece="$150 value in products"
                product_id="42235974189228"
                options1="Gold Entries ($150 Value)"
                id="BEST_DEAL"
              />
              <ProductRow
                title="Platinum Box (200 GIVEAWAY ENTRIES)"
                price_str="$200.00"
                price_num={20000}
                piece="$310 value in products"
                options1="Platinum Entries ($310 Value)"
                product_id="42235974877356"
              />
              <h5>Select Your Shirt Size:</h5>
              <CustomSelect />
            </div>
            <div  style={{fontSize: "0px" }}>
              <h5>What You Get:</h5>
              <ul style={{ listStyleImage: ""}}>
                <li style={{ listStyleImage: `url(../public/images/check.png)`, margin: '0px 0', fontSize: "15px" }}>Bronze Box (45 Entries) = $60 in Products</li>
                <li style={{ listStyleImage: `url(../public/images/check.png)`, margin: '0px 0', fontSize: "15px"  }}>Silver Box (60 Entries) = $85 in Products</li>
                <li style={{ listStyleImage: `url(../public/images/check.png)`, margin: '0px 0', fontSize: "15px"  }}>Gold Box (100 Entries) = $150 in Products</li>
                <li style={{ listStyleImage: `url(../public/images/check.png)`, margin: '0px 0', fontSize: "15px"  }}>Platinum Box (200 Entries) = $310 in Products</li>
              </ul>
            </div>
            <div className="div-block-93"  style={{padding: "30px 0" }}>
              <div className="div-block-95">
                <div className="headerdividertext" style={{fontSize: "15px" }}>PRIZE DELIVERY ADDRESS</div>
              </div>
              <div className="div-block-94" />
            </div>
            <div className="div-block-37">
              <AddressInput
                label="Address Name"
                name="shipping.line1"
                required
              />
              <AddressInput label="City" name="shipping.city" required />
              <AddressInput label="State" name="shipping.state" required />
              <AddressInput label="Zip Code" name="shipping.zip" required />
            </div>
            <div className="div-block-93">
              <div className="div-block-95">
                <div className="headerdividertext" style={{fontSize: "15px" }}>PAYMENT INFORMATION</div>
              </div>
              <div className="div-block-94" />
            </div>
            {/* <div className="div-block-37 payment-methods">
              <div
                className={
                  paymentType === "stripe"
                    ? "payment-btn-active"
                    : "payment-btn-inactive"
                }
                onClick={() => setPaymentType("stripe")}
              >
                Stripe
              </div>
              <div
                className={
                  paymentType === "square"
                    ? "payment-btn-active"
                    : "payment-btn-inactive"
                }
                onClick={() => setPaymentType("square")}
              >
                Square
              </div>
            </div> */}

            <div id="payment-form">
              <div className="div-block-98">
                {high_risk ? ( null
                  // <div id="payment-element">
                  //   <SquareCard
                  //     handleSubmit={handlePaymentMethodSubmission}
                  //     isLoading={isLoading}
                  //     status={status}
                  //   />
                  // </div>
                ) : (
                  <div id="payment-element">
                    {/*Stripe.js injects the Payment Element*/}
                    <PaymentElement
                      id="payment-element"
                      options={{
                        wallets: {
                          googlePay: "never"
                        },
                        layout: {
                          type: "accordion",
                          defaultCollapsed: true
                        },
                        terms: {
                          card: "never"
                        },
                        
                        style: {
                          base: {
                            color: "#32325d",
                            fontSmoothing: "antialiased",
                            fontSize: windowWidth > 720 ? "35px" : " 18px",
                            lineHeight: windowWidth > 720 ? "85px" : "25px",
                            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                            "::placeholder": {
                              color: "#ff5858"
                            }
                          },
                          invalid: {
                            color: "#fa755a",
                            iconColor: "#fa755a",
                          },
                        },
                      }}
                      />
                  </div>
                )}
              </div>
              <div className="div-block-98">
                <div className="div-block-96">
                  <div className="listheadertext">Item</div>
                  <div className="listheadertext">Amount</div>
                </div>
                <div>
                  <div
                    style={{
                      displex: "flex",
                      justifyContent: "space-between",
                      padding: "10px 10px 0px 17px",
                      height: "auto"
                    }}
                    className="productrow"
                  >
                    <div className="boldtext productrowtitle">
                      {/* <p style={{ lineHeight: "15px", fontSize: "15px", color: "grey" }}>{values.product?.title}</p> */}
                      <p style={{ fontSize: "10px", color: "grey" }}>{values.product?.title}</p>
                    </div>
                    <div className="boldtext productrowtitle">
                      <p style={{ fontSize: "10px", color: "grey" }}>
                        {"$" + Number(values.product?.price_num/100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {bump && (
                    <div
                      style={{
                        displex: "flex",
                        justifyContent: "space-between",
                        padding: "0px 10px 0px 17px",
                        height: "auto"
                      }}
                      className="productrow"
                    >
                    <div className="boldtext productrowtitle">
                        <p style={{ fontSize: "10px", color: "grey" }}>
                          Rush & Ensure My Order
                        </p>
                      </div>
                      <div className="boldtext productrowtitle">
                        <p style={{ fontSize: "10px", color: "grey" }}>
                          $3.99
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="div-block-99">
                    <div 
                        onClick={(e) => setBump(!bump)}
                        className="div-block-100" 
                        style={{
                          cursor: "pointer"
                        }}>
                      <div
                        style={{
                          minWidth: "25px",
                          padding: "4px 0",
                          cursor: 'pointer'
                        }}
                      >
                        <Field
                          type="checkbox"
                          name="bump"
                          id="rush"
                          checked={bump}
                          values={bump}
                        />
                      </div>
                      <div className="listheadertext o">
                        <strong>
                          Yes! <em>{`Rush & Insure`}</em>
                          {` My Order for $3.99 `}
                        </strong>
                      </div>
                      <div>
                        <img
                          src="/images/arrow-flash-small.webp"
                          loading="lazy"
                          alt=""
                          style={{
                            marginLeft: "1rem",
                            WebkitTransform: "scaleX(-1)",
                            transform: "scaleX(-1)",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-block-6">
                        <strong>
                          Put me in the front of the shipping line & insure my
                          order: 
                        </strong>
                        {` This will give your order priority in the fulfillment center
                  (There is a huge demand for these) as well as shipping
                  insurance that will cover 100% of your shipment in case of
                  loss or damaged packages, no questions asked!`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-block-7" 
                style={{
                  margin: '1rem 0'
                }}>
                <em className="italic-text">
                  {`By clicking "Enter Now" below, I certify that I am 18 years of age
            or older, and agree to the GoingBigly.com`}
                </em>
                <a
                  target="_blank"
                  href="https://goingbigly.com/pages/terms-of-service"
                  rel="noreferrer"
                >
                  <em>Terms and Conditions</em>
                </a>
                <em> for this purchase.</em>
              </div>
              {message && (
                <div className="div-block-97">
                  <p id="ERROR_TWO">{message}</p>
                </div>
              )}

              <button
                className="funnelbtn btntext"
                id="submit"
                disabled={isLoading || !stripe || !elements || isSubmitting}
                type="submit"
                style={{
                  fontFamily: "Fjalla"
                }}
              >
                {isLoading ? "Loading . . ." : "ENTER NOW"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;
