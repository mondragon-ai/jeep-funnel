function FormTwo() {
  return (
    <div className="formcard" id="FORM_TWO">
      <div className="imgblock">
        <img
          src="/images/decal-wb-patriot-bundle.png"
          loading="lazy"
          srcSet="/images/decal-wb-patriot-bundle-p-500.png 500w, /images/decal-wb-patriot-bundle.png 800w"
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="productcontainer">
        <div className="div-block-89">
          <div className="listheadertext">Item</div>
          <div className="listheadertext">Price</div>
        </div>
        <div id="PoductRowFirst" className="productrow">
          <div className="checkbox">
            <input
              disabled
              type="checkbox"
              // group="product"
              name='{ "name": "14 Giveaway Entries", "price": "900",  "piece": "$7.00 per pc", "product_id": "42235971567788" }'
              id="product_one"
            />
          </div>
          <div className="div-block-90">
            <div className="div-block-92">
              <div className="productrowtitle">(14 Giveaway Entries)</div>
              <div className="productrowsubheader">
                2 Products (1 Wristband/1 Decal)
              </div>
            </div>
          </div>
          <div className="div-block-91">
            <div className="productrowsubheader">$7.00 / pc</div>
          </div>
        </div>
        <div id="PoductRowFirst" className="productrow">
          <div className="checkbox">
            <input
              disabled
              type="checkbox"
              // group="product"
              name='{ "name": "24 Giveaway Entries", "price": "2000", "piece": "$6.00 per pc", "product_id": "42235972780204" }'
              id="product_three"
            />
          </div>
          <div className="div-block-90">
            <div className="div-block-92">
              <div className="productrowtitle">(24 Giveaway Entries)</div>
              <div className="productrowsubheader">
                4 Products (2 Wristbands/2 Decals) Save 15%
              </div>
            </div>
          </div>
          <div className="div-block-91">
            <div className="productrowsubheader">$6.00 / pc</div>
          </div>
        </div>
        <div id="BEST_DEAL" className="productrow">
          <div className="checkbox">
            <input
              defaultChecked
              disabled
              type="checkbox"
              // group="product"
              name='{ "name": "30 GIVEAWAY ENTRIES (BEST DEAL!!)", "price": "5000", "piece": "$5.00 per pc", "product_id": "42235974189228" }'
              id="product_four"
            />
          </div>
          <div className="div-block-90">
            <div className="div-block-92">
              <div className="productrowtitle">
                {" "}
                30 GIVEAWAY ENTRIES BEST DEAL!!
              </div>
              <div className="productrowsubheader">
                6 Products (3 Wristbands/3 Decals) Save 30%
              </div>
            </div>
          </div>
          <div className="div-block-91">
            <div className="productrowsubheader">$5.00 / pc</div>
          </div>
        </div>
        <div id="PoductRowFirst" className="productrow">
          <div className="checkbox">
            <input
              disabled
              type="checkbox"
              // group="product"
              name='{ "name": "40 Giveaway Entries", "price": "9900", "piece": "$4.00 per pc", "product_id": "42235974877356" }'
              id="product_two"
            />
          </div>
          <div className="div-block-90">
            <div className="div-block-92">
              <div className="productrowtitle"> (40 Giveaway Entries)</div>
              <div className="productrowsubheader">
                10 Products (5 Wristbands/5 Decals) Save 40%
              </div>
            </div>
          </div>
          <div className="div-block-91">
            <div className="productrowsubheader">$4.00 / pc</div>
          </div>
        </div>
      </div>
      <div className="div-block-93">
        <div className="div-block-95">
          <div className="headerdividertext">PRIZE DELIVERY ADDRESS</div>
        </div>
        <div className="div-block-94" />
      </div>
      <div className="div-block-37">
        <div className="input-group">
          <input
            defaultValue=""
            className="form-control"
            type="text"
            name="line1"
            id="line1"
            required
          />
          <label htmlFor="line1">Address Name</label>
          <div className="req-mark">!</div>
        </div>
        <div>
          <div className="input-group">
            <input
              defaultValue=""
              className="form-control"
              type="text"
              name="city"
              id="city"
              required
            />
            <label htmlFor="city">City</label>
            <div className="req-mark">!</div>
          </div>
        </div>
        <div>
          <div className="input-group">
            <input
              defaultValue=""
              className="form-control"
              type="text"
              name="state"
              id="state"
              required
            />
            <label htmlFor="state">State</label>
            <div className="req-mark">!</div>
          </div>
        </div>
        <div>
          <div className="input-group">
            <input
              defaultValue=""
              className="form-control"
              type="text"
              name="zip"
              id="zip"
              required
            />
            <label htmlFor="zip">Zip Code</label>
            <div className="req-mark">!</div>
          </div>
        </div>
      </div>
      <div className="div-block-93">
        <div className="div-block-95">
          <div className="headerdividertext">PAYMENT INFORMATION</div>
        </div>
        <div className="div-block-94" />
      </div>
      <form id="payment-form">
        <div className="div-block-98">
          <div id="payment-element">
            {/*Stripe.js injects the Payment Element*/}
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-96">
            <div className="listheadertext">Item</div>
            <div className="listheadertext">Amount</div>
          </div>
          <div>
            <div id="PoductRowFirst" className="productrow">
              <div className="div-block-90">
                <div id="SELECTED_NAME" className="productrowtitle" />
              </div>
              <div
                className="div-block-90"
                style={{
                  justifyContent: "flex-end",
                  paddingRight: "10px",
                }}
              >
                <div id="SELECTED_PRICE" className="productrowsubheader" />
              </div>
            </div>
            <div id="rushAndEnsure" className="productrow customeNone">
              <div className="div-block-90">
                <div id="SELECTED_NAME" className="productrowtitle">
                  Rush & Ensure My Order
                </div>
              </div>
              <div
                className="div-block-90"
                style={{
                  justifyContent: "flex-end",
                  paddingRight: "10px",
                }}
              >
                <div id="SELECTED_PRICE" className="productrowsubheader">
                  $3.99
                </div>
              </div>
            </div>
            <div className="div-block-99">
              <div className="div-block-100">
                <div
                  style={{
                    minWidth: "25px",
                    padding: "4px 0",
                  }}
                >
                  <input
                    type="checkbox"
                    // checkboxClicked
                    name="rush"
                    id="rush"
                  />
                </div>
                <div className="listheadertext o">
                  <strong>
                    Yes! <em>Rush & Insure</em> My Order for $3.99
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
                    Put me in the front of the shipping line & insure my order:
                  </strong>{" "}
                  This will give your order priority in the fulfillment center
                  (There is a huge demand for these) as well as shipping
                  insurance that will cover 100% of your shipment in case of
                  loss or damaged packages, no questions asked!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-block-7">
          <em className="italic-text">
            By clicking "Enter Now" below, I certify that I am 18 years of age
            or older, and agree to the GoingBigly.com{" "}
          </em>
          <a
            target="_blank"
            href="https://goingbigly.com/pages/terms-of-service"
          >
            <em>Terms and Conditions</em>
          </a>
          <em> for this purchase.</em>
        </div>
        <div className="div-block-97">
          <p id="ERROR_TWO" />
          <div id="payment-message" className="hidden" />
        </div>
        <button className="funnelbtn btntext" id="submit">
          Submit
        </button>
        <div id="error-message"></div>
      </form>
    </div>
  );
}

export default FormTwo;
