import { useState, useEffect, useContext } from "react";
import MyImage from "../components/MyImage"
import Footer from "../components/Footer";
import { imPoweredRequest } from "../lib/request";
import { Context } from "../context";
import { sendPageViewEvent } from "../lib/analytics";
import Router from "next/router";
import Head from "next/head";
import * as gtags from "../lib/analytics";
import * as crypto from "crypto";


const Upsell = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVIP, setShowVIP] = useState("");
  const [globalState, setGlobalState] = useContext(Context);
  const [clientOrigin, setClientOrigin] = useState("127.0.0.1");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    sendPageViewEvent("UPSELL"); // send page view event to google analytics
    setClientOrigin(window.location.origin); // set client origin
    setTimeout(() => setMessage(""), 5000);

    console.log("UPSELL");
    const query = new URLSearchParams(window.location.search);
    console.log( query.get("cus_uuid") );
    setGlobalState({
      ...globalState,
      cus_uuid: query.get("cus_uuid") || globalState.cus_uuid || "",
      funnel_uuid: query.get("funnel_uuid") || globalState.funnel_uuid || "",
      products: JSON.parse(query.get("products")) || globalState.products || [],
      high_risk: false,
      bump: query.get("bump") || globalState.bump || false,
    });
  }, []);

  const signUpForFreeDecals = async () => {
    try {
      setIsLoading(true);
      const payload = createPayloadFromOrder();
      console.log("PAYLOAD");
      const price =  payload.bump ? Number(payload.product.price )+ 399 : Number(payload.product.price);
      const conversion_price = price ? (price/100) : 0

      // gtags.event('conversion', { 'send_to': 'AW-10793712364/Ifg6CN6BkpIYEOz165oo', 'value': conversion_price, 'currency': 'USD', 'transaction_id': "txt_" + crypto.randomBytes(10).toString("hex").substring(0,10) });
      const response = await imPoweredRequest(
        "POST",
        "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/payments/quick-sub",
        payload
      );

      if (response) {
        updateGlobalState(); // update global state
        Router.push(`${clientOrigin}/congratulations`);
        return;
      }

      throw new Error(
        `We're sorry, you couldn't sign up. Please try refreshing the page and try again.`
      );
    } catch (e) {
      setMessage(e.message);
      setTimeout(() => setMessage(""), 10000);
    } finally {
      setIsLoading(false);
    }
  };

  const declineFreeDecals = async () => {
    setIsLoading(true);
    Router.push(`${clientOrigin}/congratulations`);
    setIsLoading(false);
  };

  const createPayloadFromOrder = () => {
    try {
      const { cus_uuid, high_risk, funnel_uuid } = globalState;
      console.log(cus_uuid);
      const query = new URLSearchParams(window.location.search);
      console.log( query.get("cus_uuid") );
      return {
        cus_uuid: query.get("cus_uuid") || cus_uuid,
        product: {
          high_risk: false,
          title: "VIP Membership",
          sku: "VIP-CLUB",
          price: 900,
          compare_at_price: 0,
          handle: "",
          options1: "",
          options2: "",
          options3: "",
          weight: 0,
          variant_id: 42235971567788,
          quantity: 1,
          product_id: "",
          is_recurring: true
        },
        high_risk,
        funnel_uuid: query.get("funnel_uuid") || funnel_uuid,
      };
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateGlobalState = () => {
    console.log("UPSELL");
    const query = new URLSearchParams(window.location.search);
    console.log( query.get("cus_uuid") );
    const p_list = (JSON.parse(query.get("products")) || globalState.products || []);
    setGlobalState({
      ...globalState,
      cus_uuid: query.get("cus_uuid") || globalState.cus_uuid || "",
      funnel_uuid: query.get("funnel_uuid") || globalState.funnel_uuid || "",
      products: [
        ...p_list,
        { title: "VIP Membership", price_num: 900 },
      ],
      high_risk:  query.get("high_risk") || globalState.high_risk || false,
      bump: query.get("bump") || globalState.bump || false,
    });

  };

  const showVIPClubInfo = () => setShowVIP(!showVIP);

  const description = `Enter for a chance to win a new Chevy 2500HD Duramax Diesel & $10,000.00 cash. PIck your size and get discounted items and more importantly, FAST ENTRIES to enter to win!`;
  const ogImgUrl =  "https://www.hodgetwinssweepstakes.com/images/High-Country-Funnel-Banner.png";
  const canonicalUrl = "https://www.hodgetwinssweepstakes.com";
  const t = "Hodge Twins Sweepsstake" 

  return (
    <div>
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
      <div className="section-8 wf-section">
        <div className="w-container">
          <div className="div-block-54">
            <div>
              <div className="div-block-113">
                <div className="text-block-9">
                  <strong> Your Order Qualifies For A FREE Gift!</strong>
                </div>
                <div className="div-block-112">
                  <img
                    src="/images/progress2.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 37vw, (max-width: 767px) 38vw, (max-width: 991px) 291.1953125px, 376px"
                    srcSet="images/progress2.png 500w"
                    alt=""
                    className="image-24"
                  />
                </div>
              </div>
              <div className="w-embed">
                <div className="progress-bar-container">
                  <div className="progress-bar stripes animated reverse slower">
                    <span className="progress-bar-inner">
                      Almost Complete...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {message && (
          <div
            id="payment-message"
            style={{
              color: "#00bcd4",
              padding: 20,
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            {message}
          </div>
        )}
      </div>

      <div className="section-10 wf-section">
        <div className="w-container">
          <div className="div-block-59">
            <div className="div-block-61">
              <h2 className="heading-25">
                <span className="text-span-22">ONE TIME</span>{" "}
                <span className="text-span-23">ONLY OFFER</span>
              </h2>
            </div>
            <div className="div-block-60">
              <img
                src="/images/divider-red.png"
                loading="lazy"
                alt="Heading text divider"
                className="image-14"
              />
            </div>
            <div>
              <p className="paragraph-32">
                Become a member of the{" "}
                <span className="text-span-26">Hodgetwins/Bigly VIP Club</span>{" "}
                for just $9.00 and claim your FREE White Privelage Card below!
              </p>
            </div>

            <div className="div-block-88">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item active">
                  <div
                    className="accordion-header js-accordion-header"
                    onClick={showVIPClubInfo}
                    style={{
                      padding: "15px 10px",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      display: "flex"
                    }}
                  >
                    <span style={{ fontSize: windowWidth > 720 ? "45px" : "18px", fontFamily: "Fjalla" }} className="boldtext">
                      What is the Hodge Twins/Bigly VIP Club?
                    </span>
                    <img
                      src="/images/plus-icon-13062.png"
                      loading="lazy"
                      alt="Bigly logo"
                      className
                      width={windowWidth > 720 ? 40: 30}
                      height={windowWidth > 720 ? 40: 30}
                    />
                  </div>
                  {showVIP && (
                    <div
                      className="accordion-body js-accordion-body"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="accordion-body__contents">
                        <div className="section--44513">
                          <div className="containerInner" style={{ borderRadius: "6px" }}>
                            <div className="row-185">
                              <div className="col-full-111-127">
                                <div className="" style={{textAlign: "center"}}>
                                  <h1 style={{ fontSize: windowWidth > 720 ? "45px" : "35px", lineHeight: windowWidth > 720 ? "45px" : "35px", fontFamily: "Fjalla",  }} >Hodge Twins/Bigly < br /> VIP Club</h1>
                                </div>
                                <div className="" style={{textAlign: "center"}}>
                                  <h1 style={{ fontSize: windowWidth > 720 ? "45px" : "25px", lineHeight: windowWidth > 720 ? "45px" : "30px", fontFamily: "Fjalla",  }}>
                                    {`(This ain't your ordinary Membership Club)`}
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "rgb(16, 40, 76)",
                              fontFamily: "'Fjalla'",
                            }}>
                              <div style={{
                                display: "flex",
                                flexDirection: windowWidth > 720 ? "row" : "column",
                                justifyContent: "center",
                                alignItems: windowWidth > 720 ?  "" : "center",
                                width: windowWidth > 720 ? "80%" : '100%'
                              }}>
                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  textAlign: "center",
                                  width: "300px",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/d1/09d9b098c740b28b727b900bcb99b6/Coins.png"} />
                                  </div>
                                  <h3 style={{
                                    fontSize: "20px",
                                    padding: "0 2rem",}}>Monthly <br />Member Credits</h3>
                                </div>

                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  width: "300px",
                                  textAlign: "center",
                                  padding: "0 2rem",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/dc/5821281242414c9c54cf107ac9a173/Winner.png"} />
                                  </div>
                                  <h3 style={{fontSize: "20px"}}>Automatic DOUBLE Entries into ALL Giveaways</h3>
                                </div>

                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  width: "300px",
                                  textAlign: "center",
                                  padding: "0 2rem",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/a7/16a9dc49e24f3eb88e8e70161f9ed7/Sale.png"} />
                                  </div>
                                  <h3 style={{fontSize: "20px"}}>Hodgetwins Gear at the Best Prices</h3>
                                </div>

                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  width: "300px",
                                  textAlign: "center",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/62/360aa636b541ff8fca64a957b49400/VIPexclusive.png"} />
                                  </div>
                                  <h3 style={{fontSize: "20px"}}>#Exclusive Monthly VIP-ONLY Giveaways</h3>
                                </div>

                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  width: "300px",
                                  textAlign: "center",
                                  padding: "0 2rem",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/6d/0c3cec709647df8bb8b4372d104f5b/Exclusive.png"} />
                                  </div>
                                  <h3 style={{fontSize: "20px"}}>Early Access to Products, Promos, and Giveaways</h3>
                                </div>

                                <div style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  width: "300px",
                                  padding: "0 2rem",
                                  textAlign: "center",
                                }}>

                                  <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100px",
                                    width: "100px",
                                  }}>
                                    <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/5b/3d058c28214449ac015923f85fd466/Calendar.png"} />
                                  </div>
                                  <h3 style={{fontSize: "20px"}}>Unlimited Skips</h3>
                                </div>

                              </div>

                              <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}>
                                <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/86/7c101b9eb140fbae19453daa888e22/official-hodge-twins-4-.png"} />
                              </div>
                            </div>
                            {/* <div
                              id="row-173"
                              style={{
                                paddingTop: "20px",
                                paddingBottom: "10px",
                                margin: "0px",
                                outline: "none",
                              }}
                            >
                              <div
                                id="col-full-143-145"
                                style={{ outline: "none" }}
                              >
                                <div style={{ padding: "0 10px" }}>
                                  <div id="button-93414"  style={{
                                    justifyContent: "center",
                                    display: "flex"
                                  }}>
                                    <a
                                      href="#tmp_button-70655"
                                      className="upsell_signup"
                                      rel="noopener noreferrer"
                                      style={{
                                        textDecoration: "none",
                                        padding: "1.5rem 1rem",
                                        borderRadius: "5px",
                                      }}
                                    >
                                      <span className="elButtonMain" 
                                      style={{
                                        fontFamily: "Fjalla",
                                      }}>
                                        Sign me up! I want to WIN!
                                      </span>
                                      <span className="elButtonSub" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="div-block-63">
              <div className="div-block-62">
                <img
                  src="/images/wpc.jpg"
                  loading="lazy"
                  srcSet="/images/wpc.jpg 500w"
                  sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 23vw, 24vw"
                  alt="Patriot decal pack"
                  className="image-15"
                />
              </div>
              <div className="div-block-64">
                <h3 className="heading-26">
                  Official White Privilege Card
                </h3>
                <p className="paragraph-34">
                  Patriot Pack Cost: <span className="text-span-28">FREE</span>
                  <br />
                  VIP Club Cost Today: $9.00
                </p>
                <p className="paragraph-33">
                  VIP Members receive double bonus entries{" "}
                  <span className="text-span-27">
                    <strong>(18 entries/month)</strong>
                  </span>{" "}
                  into each giveaway as long as you are an active member!
                  Memberships will re-bill monthly at $9.00 per month until
                  cancelled by contacting our support team. Monthly Club members
                  receive bonus entries, bonus giveaways, discounts, and
                  additional benefits/offers.
                </p>
                <div className="button-wrapper">
                  <div
                    id="tmp_button-70655"
                    className="offer-button congratsBtn"
                    disabled={isLoading}
                    onClick={signUpForFreeDecals}
                  >
                    <svg
                      className="cart-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1.19em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 1664 1408"
                    >
                      <path
                        fill="currentColor"
                        d="M1280 448q0-26-19-45t-45-19t-45 19l-147 146V256q0-26-19-45t-45-19t-45 19t-19 45v293L749 403q-19-19-45-19t-45 19t-19 45t19 45l256 256q19 19 45 19t45-19l256-256q19-19 19-45zm-640 832q0 53-37.5 90.5T512 1408t-90.5-37.5T384 1280t37.5-90.5T512 1152t90.5 37.5T640 1280zm896 0q0 53-37.5 90.5T1408 1408t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5zm128-1088v512q0 24-16 42.5t-41 21.5L563 890q1 7 4.5 21.5t6 26.5t2.5 22q0 16-24 64h920q26 0 45 19t19 45t-19 45t-45 19H448q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5t20.5-38L268 128H64q-26 0-45-19T0 64t19-45T64 0h256q16 0 28.5 6.5t20 15.5t13 24.5T389 73t5.5 29.5T399 128h1201q26 0 45 19t19 45z"
                      />
                    </svg>
                    {isLoading
                      ? `Loading . . .`
                      : `Yes! Claim my Free Card and Sign me up!`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wf-section"
        style={{ background: "#fff", borderBottom: "1px solid red" }}
      >
        <div className="w-container">
          <div className="div-block-65">
            <div className="html-embed-7 w-embed declineBtn">
              <div className="button-wrapper">
                <div className="decline-button" onClick={declineFreeDecals}>
                  <svg
                    className="thumbs-down"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.05em"
                    height="1em"
                    viewBox="0 0 1600 1536"
                  >
                    <path
                      fill="currentColor"
                      d="M256 320q0 26-19 45t-45 19q-27 0-45.5-19T128 320q0-27 18.5-45.5T192 256q26 0 45 18.5t19 45.5zm160 512V192q0-26-19-45t-45-19H64q-26 0-45 19T0 192v640q0 26 19 45t45 19h288q26 0 45-19t19-45zm1129-149q55 61 55 149q-1 78-57.5 135t-134.5 57h-277q4 14 8 24t11 22t10 18q18 37 27 57t19 58.5t10 76.5q0 24-.5 39t-5 45t-12 50t-24 45t-40 40.5t-60 26T992 1536q-26 0-45-19q-20-20-34-50t-19.5-52t-12.5-61q-9-42-13.5-60.5T850 1245t-31-48q-33-33-101-120q-49-64-101-121t-76-59q-25-2-43-20.5T480 833V192q0-26 19-44.5t45-19.5q35-1 158-44q77-26 120.5-39.5t121.5-29T1088 0h129q133 2 197 78q58 69 49 181q39 37 54 94q17 61 0 117q46 61 43 137q0 32-15 76z"
                    />
                  </svg>
                  {`No, I don't want free decals`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upsell;

export async function getServerSideProps({ req }) {
  sendPageViewEvent("UPSELL");
  return { props: {} };
}
