import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import ProductRow from "./ProductRow";
import { PaymentElement } from "@stripe/react-stripe-js";
import AddressInput from "./AddressInput";
import MyImage from "./MyImage";
import SquareCard from "./SquareCard";

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
  // paymentType,
  // setPaymentType,
  high_risk,
}) {

  const [bump, setBump] = useState(true);

  return (
    <div className="formcard" id="FORM_TWO">
      <div className="imgblock">
        <MyImage src={"/images/decal-wb-patriot-bundle.png"} />
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
                title="(14 Giveaway Entries)"
                price_str="$7.00 / pc"
                price_num={900}
                piece="2 Products (1 Wristband/1 Decal)"
                product_id="42235971567788"
              />
              <ProductRow
                title="(24 Giveaway Entries)"
                price_str="$6.00 / pc"
                price_num={1200}
                piece="4 Products (2 Wristbands/2 Decals) Save 15%"
                product_id="42235972780204"
              />
              <ProductRow
                title="30 GIVEAWAY ENTRIES (BEST DEAL!!)"
                price_str="$5.00 / pc"
                price_num={5000}
                piece="6 Products (3 Wristbands/3 Decals) Save 30%"
                product_id="42235974189228"
                id="BEST_DEAL"
              />
              <ProductRow
                title="(40 Giveaway Entries)"
                price_str="$4.00 / pc"
                price_num={1600}
                piece="10 Products (5 Wristbands/5 Decals) Save 40%"
                product_id="42235974877356"
              />
            </div>
            <div className="div-block-93">
              <div className="div-block-95">
                <div className="headerdividertext">PRIZE DELIVERY ADDRESS</div>
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
                <div className="headerdividertext">PAYMENT INFORMATION</div>
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
                {high_risk ? (
                  <div id="payment-element">
                    <SquareCard
                      handleSubmit={handlePaymentMethodSubmission}
                      isLoading={isLoading}
                      status={status}
                    />
                  </div>
                ) : (
                  <div id="payment-element">
                    {/*Stripe.js injects the Payment Element*/}
                    <PaymentElement id="payment-element" />
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
                      padding: "10px 10px 10px 17px",
                    }}
                    className="productrow"
                  >
                    <div className="boldtext productrowtitle">
                      <p>{values.product?.title}</p>
                      <p style={{ fontSize: "10px", color: "grey" }}>{values.product?.piece}</p>
                    </div>
                    <div className="productrowsubheader min">
                      {values.product?.price_str?.replace(/\s/g, "")}
                    </div>
                  </div>
                  {values.bump && (
                    <div
                      style={{
                        displex: "flex",
                        justifyContent: "space-between",
                        padding: "10px 10px 10px 17px",
                      }}
                      className="productrow"
                    >
                      <div className="boldtext productrowtitle">
                        Rush & Ensure My Order
                      </div>
                      <div className="productrowsubheader min">$3.99</div>
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
                          onChange={(e) => {
                            setFieldValue("product", {
                              title,
                              price_str,
                              price_num,
                              piece,
                              product_id,
                            });
                          }}
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
