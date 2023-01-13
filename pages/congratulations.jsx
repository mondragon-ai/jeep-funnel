import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { sendPageViewEvent } from "../lib/analytics";
import { Context } from "../context";
import LoadProducts from "../components/LoadProducts";

const Congratulations = () => {
  const [globalState] = useContext(Context);

  useEffect(() => {
    sendPageViewEvent("CONFIRMED"); // send page view event to google analytics
  }, []);

  return (
    <div className="section-7 newt wf-section">
      <div className="container-9 w-container">
        <div className="div-block-44">
          <h1 className="heading-20">
            <strong className="bold-text-10">Congrats - Order Complete!</strong>
          </h1>
          <div className="div-block-51">
            <div className="div-block-47 receipt-dividers">
              <div className="html-embed-4 icons w-embed">
                <svg
                  className="check"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25em"
                  height="1em"
                  viewBox="0 0 1600 1280"
                >
                  <path
                    fill="currentColor"
                    d="M1575 310q0 40-28 68l-724 724l-136 136q-28 28-68 28t-68-28l-136-136L53 740q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295l656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
                  />
                </svg>
              </div>
              <h2 className="heading-21 receipt-headers">
                Your Product Receipt:
              </h2>
            </div>
            <LoadProducts products={globalState.products} />
            <div className="div-block-47 receipt-dividers">
              <div className="html-embed-5 icons w-embed">
                <img
                  src="/images/american-wavy-flag-clipart-free-png.webp"
                  height={25}
                  width={35}
                />
              </div>
              <h2 className="heading-21 receipt-headers">
                Thank you for supporting a Veteran Owned Business!
              </h2>
            </div>
            <div className="div-block-53">
              <div className="text-block-10">
                <strong className="bold-text-11">
                  {`Here's a FREE $5.00 OFF to officialhodgetwins.com`}
                </strong>
              </div>
              <a
                href="https://officialhodgetwins.com/"
                className="div-block-115"
              >
                <div className="div-block-114">
                  <h2 className="heading-35">CLAIM MY FREE $5 OFF</h2>
                </div>
              </a>
              <div className="text-block-10">
                <strong className="bold-text-11">
                  *Offer ONLY VALID for 24 Hours
                  <br />
                </strong>
              </div>
            </div>
            <div className="div-block-47 receipt-dividers">
              <div className="html-embed-5 icons w-embed">
                <svg
                  className="lock"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.88em"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                  />
                </svg>
              </div>
              <h2 className="heading-21 receipt-headers">Our Guarantee:</h2>
            </div>
            <div className="div-block-45">
              <div className="div-block-46">
                <div className="div-block-52">
                  <img
                    src="images/seal1.jpg"
                    loading="lazy"
                    alt="Prize ribbon with check mark"
                    className="image-11"
                  />
                </div>
                <div className="div-block-48">
                  <h2 className="heading-22">No Questions Asked Guarantee</h2>
                  <p className="paragraph-28">
                    {` Questions or concerns about your order? Reach out to our
                    team at info@shophodgetwins.com and we'll make sure you're
                    taken care of!`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
