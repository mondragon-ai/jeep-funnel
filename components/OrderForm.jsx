import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ProductRow from "./ProductRow";
import { PaymentElement } from "@stripe/react-stripe-js";
import AddressInput from "./AddressInput";
import MyImage from "./MyImage";

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
  isLoading,
  message,
  stripe,
  elements,
}) {
  const paymentElementOptions = {
    layout: "tabs",
  };
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
                name="(14 Giveaway Entries)"
                price="$7.00 / pc"
                piece="2 Products (1 Wristband/1 Decal)"
                data={
                  '{ "name": "14 Giveaway Entries", "price": "900",  "piece": "$7.00 per pc", "product_id": "42235971567788" }'
                }
                productId="42235971567788"
              />
              <ProductRow
                name="(24 Giveaway Entries)"
                price="$6.00 / pc "
                piece="4 Products (2 Wristbands/2 Decals) Save 15%"
                data={
                  '{ "name": "24 Giveaway Entries", "price": "1200",  "piece": "$6.00 per pc", "product_id": "42235972255916" }'
                }
                productId="42235972780204"
              />
              <ProductRow
                name="30 GIVEAWAY ENTRIES (BEST DEAL!!)"
                price="$5.00 / pc"
                piece="6 Products (3 Wristbands/3 Decals) Save 30%"
                productId="42235974189228"
                data={
                  '{ "name": "30 GIVEAWAY ENTRIES (BEST DEAL!!)", "price": "5000",  "piece": "$5.00 per pc", "product_id": "42235974189228" }'
                }
                id="BEST_DEAL"
              />
              <ProductRow
                name="(40 Giveaway Entries)"
                price="$4.00 / pc"
                piece="10 Products (5 Wristbands/5 Decals) Save 40%"
                data={
                  '{ "name": "40 Giveaway Entries", "price": "1600",  "piece": "$4.00 per pc", "product_id": "42235974877356" }'
                }
                productId="42235974877356"
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
            <div id="payment-form">
              <div className="div-block-98">
                <div id="payment-element">
                  {/*Stripe.js injects the Payment Element*/}
                  <PaymentElement
                    id="payment-element"
                    options={paymentElementOptions}
                  />
                </div>
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
                    <div className="boldtext">
                      {JSON.parse(values.product).name}
                    </div>
                    <div className="productrowsubheader">
                      {JSON.parse(values.product).price}
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
                      <div className="boldtext">Rush & Ensure My Order</div>
                      <div className="productrowsubheader">$3.99</div>
                    </div>
                  )}
                  <div className="div-block-99">
                    <div className="div-block-100">
                      <div
                        style={{
                          minWidth: "25px",
                          padding: "4px 0",
                        }}
                      >
                        <Field type="checkbox" name="bump" id="rush" />
                      </div>
                      <div className="listheadertext o">
                        <strong>
                          Yes! <em>{`Rush & Insure`}</em>
                          {` My Order for $3.99`}
                        </strong>
                      </div>
                      <div>
                        <img
                          src="/images/arrow-flash-small.webp"
                          loading="lazy"
                          alt=""
                          style={{
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
              <div className="text-block-7">
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
                  {/* <div id="payment-message" className="hidden" /> */}
                </div>
              )}

              <button
                className="funnelbtn btntext"
                id="submit"
                disabled={isLoading || !stripe || !elements || isSubmitting}
                type="submit"
              >
                {isLoading ? "Loading . . ." : "Submit"}
              </button>
              {/* <div id="error-message"></div> */}
              {/* Show any error or success messages */}
              {message && <div id="payment-message">{message}</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;
