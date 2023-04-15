import { useContext, useState, useEffect } from "react";
// import SignupFormContainer from "../containers/SignupFormContainer";
// import OrderFormContainer from "../containers/OrderFormContainer";
// import Footer from "../components/Footer";
import MyImage from "../components/MyImage";
// import IFrame from "../components/IFrame";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { sendPageViewEvent } from "../lib/analytics";
import { Context } from "../context";
import Head from "next/head";
import dynamic from "next/dynamic";

const SignupFormContainer = dynamic(() =>
  import("../containers/SignupFormContainer")
);
const OrderFormContainer = dynamic(() =>
  import("../containers/OrderFormContainer")
);
const Content1 = dynamic(() => import("../components/Content1"));
const Content2 = dynamic(() => import("../components/Content2"));
const Content3 = dynamic(() => import("../components/Content3"));
const Content4 = dynamic(() => import("../components/Content4"));
const Footer = dynamic(() => import("../components/Footer"));

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  const [viewItem, setViewItem] = useState(0);
  const [globalState] = useContext(Context);
  const { clientSecret } = globalState;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    sendPageViewEvent("OPT_IN"); // send page view event to google analytics
  }, []);

  const options = {
    clientSecret,
    appearance: { theme: "stripe" },
  };
  const description = `Enter for a chance to win a new Chevy 2500HD Duramax Diesel & $10,000.00 cash. PIck your size and get discounted items and more importantly, FAST ENTRIES to enter to win!`;
  const ogImgUrl =
    "https://www.hodgetwinssweepstakes.com/images/High-Country-Funnel-Banner.png";
  const canonicalUrl = "https://www.hodgetwinssweepstakes.com/";
  const t = "Hodge Twins Sweepsstake";

  return (
    <div className="body-4">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{t}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={"artcle"} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImgUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={t} />
      </Head>
      <div className="section-2 wf-section">
        <div className="div-block-110" />
        <div
          className="container-7 w-container"
          style={{
            maxWidth: windowWidth > 720 ? "" : "100%",
          }}
        >
          <div className="w-row">
            <div
              className="column-6 w-col w-col-6"
              style={{
                paddingLeft: windowWidth > 720 ? "" : "1rem",
                paddingRight: windowWidth > 720 ? "" : "1rem",
              }}
            >
              <div className="div-block-10">
                <div
                  style={{
                    padding: " 1rem 0",
                  }}
                >
                  <MyImage src="/images/High-Country-Funnel-Banner.jpg" />
                </div>
                <h1
                  className="heading-10"
                  style={{
                    fontFamily: "'Fjalla One', Helvetica, sans-serif",
                    fontSize: windowWidth > 720 ? "47px" : "35px",
                    lineHeight: windowWidth > 720 ? "" : "35px",
                    padding: " 1rem 0",
                    fontFamily: "'Fjalla'",
                  }}
                >
                  WIN THIS CHEVY 2500HD
                  <span className="text-span-9"> DURAMAX DIESEL </span> +
                  $10,000 CASH
                </h1>
                {/* <IFrame
                  videoId="AXG0b0qkjnY"
                  className="w-embed-youtubevideo"
                  title="Veteran wins a Ford Raptor! (Hodgetwins Giveaway)"
                /> */}
              </div>
              <div
                style={{
                  padding: " 1rem 0",
                }}
              >
                <MyImage src="/images/presented-by-hodge-bigly.png" />
              </div>
            </div>
            <div id="TOP_OF_FORM" className="column-4 column-7 w-col w-col-6">
              <div
                className="div-block-30"
                style={{
                  minWidth: "100% !important",
                }}
              >
                <div
                  style={{
                    padding: " 1rem 2rem",
                  }}
                >
                  <MyImage src="/images/chevy-funnel-banner.jpg" />
                </div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <h4
                    className="heading-33"
                    style={{
                      textAlign: "center",
                      color: "#000",
                      fontSize: windowWidth > 720 ? "45px" : "30px",
                      lineHeight: "45px",
                      width: "100%",
                      lineHeight: "40px",
                      fontFamily: "'Fjalla'",
                    }}
                  >
                    {`EVERY $1 SPENT = 1 ENTRIES`}
                  </h4>
                  <h4
                    className="heading-34"
                    style={{
                      textAlign: "center",
                      fontSize: windowWidth > 720 ? "31px" : "20px",
                      color: "rgb(231, 47, 42)",
                      lineHeight: windowWidth > 720 ? "40px" : "25px",
                      fontFamily: "'Fjalla'",
                    }}
                  >
                    Sign up & get your Entry
                    <br /> Box to Enter to WIN!
                  </h4>
                </div>
                <div
                  className="div-block-37"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                  }}
                >
                  {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                      <OrderFormContainer />
                    </Elements>
                  ) : (
                    <SignupFormContainer />
                  )}
                </div>
              </div>
              <div
                className=""
                style={{
                  padding: "10px 0",
                  margin: "0",
                  color: "#9c9c9c",
                  textAlign: "center",
                  background: "white",
                }}
              >
                <p>We respect your privacy</p>
              </div>
              <div className="div-block-34">
                <p
                  className="paragraph-26"
                  style={{
                    color: "#9c9c9c",
                    textAlign: "center",
                    background: "white",
                  }}
                >
                  <a
                    href="https://gobigly.com/policies/privacy-policy"
                    target="_parent"
                  >
                    <span className="text-span-18 entry-form-footer">
                      Privacy Policy
                    </span>
                  </a>
                  {` | `}
                  <a
                    href="https://goingbigly.com/policies/terms-of-service"
                    target="_parent"
                  >
                    <span className="text-span-17 entry-form-footer">
                      Terms of Service
                    </span>
                    ‍
                  </a>
                  <br />
                  {`See `}
                  <a
                    href="https://cdn.shopify.com/s/files/1/0612/0593/8348/files/Hodgetwins_9_Official_Rules_Final_16658e9e-03ed-4df7-a49d-7c976480bc9e.pdf?v=1679742006"
                    target="_parent"
                  >
                    <span className="text-span-16 entry-form-footer">
                      {`Official Rules`}
                    </span>
                  </a>
                  {` for Alternate Methods`}
                  <br />
                  {`of Entry - Winner is Selected by`}
                  <br />
                  {`Independent 3rd Party Agency`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content1 />
      <Content2
        viewItem={viewItem}
        setViewItem={setViewItem}
        windowWidth={windowWidth}
      />
      <Content3 />
      <Content4 windowWidth={windowWidth} />
      <Footer home />
    </div>
  );
}
