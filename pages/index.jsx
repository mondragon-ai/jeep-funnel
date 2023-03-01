import { useContext, useState, useEffect } from "react";
import SignupFormContainer from "../containers/SignupFormContainer";
import OrderFormContainer from "../containers/OrderFormContainer";
import Footer from "../components/Footer";
import MyImage from "../components/MyImage";
import IFrame from "../components/IFrame";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { sendPageViewEvent } from "../lib/analytics";
import { Context } from "../context";
import Head from "next/head";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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

  return (
    <div className="body-4">
      <Head>
        <title>Hodge Twins Sweeps Stakes</title>
        <meta name="description" content={"Enter a chance to win a new vehicle & $10,000 Cash!"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="Enter a chance to win a new vehicle & $10,000 Cash!" />
        <meta
          property="og:description"
          content="Enter a chance to win a new vehicle & $10,000 Cash!"
        />
        <meta
          property="og:image"
          content="https://hodgetwins.goingbigly.com/hosted/images/5c/272d0ce18c44cb851c7459279df8a7/Jeep-Giveaway.png"
        />
      </Head>
      <div className="section-2 wf-section">
        <div className="div-block-110" />
        <div className="container-7 w-container" style={{
          maxWidth: windowWidth > 720 ? "" : "100%",
        }}>
          <div className="w-row">
            <div className="column-6 w-col w-col-6"  style={{
              paddingLeft: windowWidth > 720 ? "" : "1rem",
              paddingRight: windowWidth > 720 ? "" : "1rem",
            }}>
              <div className="div-block-10">
                <h1 className="heading-10" style={{
                  fontFamily: "'Fjalla One', Helvetica, sans-serif",
                  fontSize: windowWidth > 720 ? "47px" : "35px",
                  lineHeight: windowWidth > 720 ? "" : "35px",
                  padding:' 1rem 0',
                  fontFamily: "'Fjalla'"
                }}>
                WIN THIS 
                  <span className="text-span-9"> JEEP WRANGLER <br/> UNLIMITED</span> + $10,000 CASH
                </h1>
                <IFrame
                  videoId="3tgjwAbWxto"
                  className="w-embed-youtubevideo"
                  title="Veteran wins a Ford Raptor! (Hodgetwins Giveaway)"
                />
              </div>
                <div style={{
                  padding:' 1rem 0'
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/60/87d257583a47768e9dc0aa512e32c4/presented-by-hodge-bigly.png" />
                </div>
            </div>
            <div id="TOP_OF_FORM" className="column-4 column-7 w-col w-col-6">
              <div className="div-block-30" style={{
                    minWidth: "100% !important"
                }}>
                <div style={{
                  padding:' 1rem 2rem'
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/5c/272d0ce18c44cb851c7459279df8a7/Jeep-Giveaway.png" />
                </div>
                <div 
                    style={{
                      width: "100%"
                    }}
                  >
                  <h4
                    className="heading-33"
                    style={{
                      textAlign: "center",
                      color: "#000",
                      fontSize: windowWidth > 720 ? "45px" : "30px",
                      lineHeight: '45px',
                      width: "100%",
                      lineHeight: '40px',
                      fontFamily: "'Fjalla'"
                    }}
                  >
                    {`EVERY $1 SPENT = 1 ENTRIES`}
                  </h4>
                  <h4 className="heading-34" style={{
                    textAlign: "center",
                    fontSize: windowWidth > 720 ? "31px" : "20px",
                    color: "rgb(231, 47, 42)",
                    lineHeight: windowWidth > 720 ? "40px" : "25px",
                    fontFamily: "'Fjalla'"
                    }}>
                    Sign up & get your Patriot<br />  Bundle to Enter to WIN!
                  </h4>
                </div>
                <div className="div-block-37" style={{
                  paddingBottom: "0",
                  marginBottom: "0",
                }}>
                  {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                      <OrderFormContainer />
                    </Elements>
                  ) : (
                    <SignupFormContainer />
                  )}
                </div>
              </div>
              <div className="" style={{
                padding: "10px 0",
                margin: "0",
                color:"#9c9c9c",
                textAlign: "center",
                background: "white"
              }}>
                <p>We respect your privacy</p>
              </div>
              <div className="div-block-34">
                <p className="paragraph-26" style={{
                color:"#9c9c9c",
                textAlign: "center",
                background: "white"
              }}>
                  <a
                    href="https://goingbigly.com/pages/privacy-policy"
                    target="_parent"
                  >
                    <span className="text-span-18 entry-form-footer">
                      Privacy Policy
                    </span>
                  </a>
                 {` | `}
                  <a
                    href="https://goingbigly.com/pages/terms-of-service"
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
                    href="https://cdn.shopify.com/s/files/1/0612/0593/8348/files/Hodgetwins_Gas_Giveaway_1_pdf.pdf?v=1658242977"
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
      <div className="wf-section">
        <div className="w-container">
          <div className="div-block-36">
            <h2 className="heading-11">
              
              <div style={{ marginTop: 30 }}>
                <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/76/6b3e7fec3f412e90b68e080dae4228/Made-For-America-1-1-.png"} />
              </div>
              <div style={{ marginTop: 30 }}>
                {`A portion of all proceeds benefit Veterans, First Responders, & their families.`}
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="section-3 wf-section">
        <div className="" style={{ 
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "1rem"
            }}>
          <div className="" style={{ 
            width: windowWidth > 720 ? "50%" : "80%",
            padding: "2rem 0"
            }}>
            <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/fd/0032b19687400baedb5c05ad884e87/Jeep.png"} />
          </div>
        </div>
        <div className="" style={{ 
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            background: "black",
            marginBottom: "3rem"
            }}>
          <div className="" style={{ 
            width: windowWidth > 720 ? "70%" : "93%",
            padding: "2rem 0"
            }}>
            <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/35/7f7e1c0e174d22a2b827fce86039a3/FINAL-JEEP-SPECS-1-.png"} />
          </div>
        </div>
        <div className="container-11" style={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginBottom: "3rem"
            }}>
          <div className="div-block-12" style={{ 
            width: windowWidth > 720 ? "70%" : "90%",
            padding: windowWidth > 720 ? "1rem 0.5rem" : "1rem",
            }}>
            <p className="faq-p">
              {`People ask us, "Why are y'all giving away cash, free gas and trucks!?", and we'll tell you why...we got tired of paying big tech for expensive advertising and marketing, so we decided to do it our own way, and give back to you, our fans. `}
              <span className="text-span-37">give back to you, our fans</span>.
            </p>
            <p className="faq-p">
              {`We've been fortunate enough to give away over $500k+ worth of vehicles and prizes to our fans this year alone, and for our new promo, every purchase you make gets you entered to WIN A JEEP WRANGLER UNLIMITED HIGH ALTITUDE 4X4 + $10,000 CASH! 🔥`}
              <span style={{ display: "block", marginTop: 70 }}>
                {`Thank you for all the support!`}
              </span>
              -
              <span className="text-span-35 boldtext">
                {"Keith & Kevin Hodge"}
              </span>
              {` & `}
              <span className="text-span-34 boldtext">Team Bigly</span>
            </p>
          </div>
          <a href="#TOP_OF_FORM" className="button accent w-button" style={{
            fontFamily: "Fjalla",
            fontWeight: 700,
            margin: windowWidth > 720 ? "" : "0",
            maxWidth: windowWidth > 720 ? "" : "80%",
            fontSize: windowWidth > 720 ? "" : "20px",
            marginBottom: windowWidth > 720 ? "" : "2rem",
          }}>
            {`YES! I Want to WIN A FREE JEEP!`}
          </a>
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            }}>

              <div style={{ 
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}>
                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: windowWidth > 720 ? "500px" : "auto",
                  width: windowWidth > 720 ? "600px" : "95%",
                  padding: "1rem",
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/9d/e98b59a0ac482b81083ba5e82bc1a1/IMG_3470.jpg" className="" />
                </div>
                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: windowWidth > 720 ? "500px" : "auto",
                  width: windowWidth > 720 ? "600px" : "95%",
                  padding: "1rem"
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/40/cf273177a0460f9df19572c4b8a4a2/IMG_7810.jpg" className="" />
                </div>
              </div>

              <div style={{ 
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}>
                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  height: windowWidth > 720 ? "500px" : "auto",
                  width: windowWidth > 720 ? "600px" : "95%",
                  padding: "1rem"
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/79/88ad48c8a84505adb68cf8ce595aa7/IMG_7848.jpg" className="" />
                </div>
                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "500px" : "auto",
                  padding: "1rem"
                }}>
                  <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/04/5fa801f63d40d19d1ef39fd884238a/IMG_7814.jpg" className="" />
                </div>
              </div>
          </div>
        <div className="container-11" style={{ 
              maxWidth: windowWidth > 720 ? "70%" : "100%",
              padding: "2rem 0"
              }}>
            <div className="div-block-12" style={{ 
              maxWidth: windowWidth > 720 ? "70%" : "100%",
              padding: "1rem",
              color: "white",
              fontSize:  windowWidth > 720 ? "30px" : "15px",
              fontWeight: "700",
              fontFamily: "Fjalla",
              textAlign: "center"
              }}>
              <div style={{ 
                color: "white"
              }}>
                <span className="redtext boldtext">
                  {`JEEP WRANGLER UNLIMITED HIGH ALTITUDE `}
                </span>
                {`4X4`}
              </div>
              <div>
                <span className="redtext boldtext">{`3.6L V6 24V VVT® `} </span>
                {`Etorque Engine `}
              </div>
              <div>
                <span className="redtext boldtext">{`‍SKY ONE-TOUCH® `}</span>
                {`Power-Top`}
              </div>
              <span className="redtext boldtext">
                ‍{`20" FUEL PERFORMANCE WHEELS  `}
              </span>
              {`Wrapped in 37" Mastercraft Courser Trail HD Tires `}
            </div>
          </div>
          <div className="div-block-11">
            <h1 className="heading-30" style={{
              fontSize:  windowWidth > 720 ? "66px" : "30px",
              lineHeight:  windowWidth > 720 ? "66px" : "35px",
              fontFamily: "'Fjalla'",
              padding: "0"
            }}>
              PAST GIVEAWAY WINNERS
              <br />‍
              <span className="text-span-38 boldtext" style={{
                fontSize:  windowWidth > 720 ? "45px" : "25px",
                lineHeight:  windowWidth > 720 ? "45px" : "25px",
              }}>
                THIS COULD BE YOU...
              </span>
            </h1>
            <div style={{ 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              }}>

                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/c6/beb420a5f941b597d1cf27b4ebc507/Giveaway---Raptor.png" className="" />
                  </div>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/ed/e088d7a1b243469c66e1c5d877c825/Giveaway---Gladiator.png" className="" />
                  </div>
                </div>

                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/94/2d0580c9b94b00a2a36f372aafb763/Giveaway---Stefanie.png" className="" />
                  </div>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/ab/29647dc5a6499e9a0796188e97a6e8/Giveaway---TRX.png" className="" />
                  </div>
                </div>



                <div style={{ 
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/af/03d5f545464161a9d6bbadb883991c/Giveaway---Grover.png" className="" />
                  </div>
                  <div style={{ 
                    display: "flex",
                    flexDirection: windowWidth > 720 ? "row" : "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: windowWidth > 720 ? "600px" : "95%",
                    height: windowWidth > 720 ? "auto" : "auto",
                    padding: "2rem 1rem"
                  }}>
                    <MyImage src="https://hodgetwins.goingbigly.com/hosted/images/5c/9910b18f7243d48f12a63a0ae49e09/Giveaway---Monica.png" className="" />
                  </div>
                </div>

                
                
            </div>
          </div>
        </div>
        <h1 className="heading-30"  style={{ 
          fontSize:  windowWidth > 720 ? "65px" : "45px",
          lineHeight:  windowWidth > 720 ? "65px" : "45px",
          fontFamily: "Fjalla"
        }}>
          Got Questions?
          <br />‍<span className="text-span-38 boldtext" style={{ 
          fontSize:  windowWidth > 720 ? "45px" : "25px",
          lineHeight:  windowWidth > 720 ? "45px" : "25px",
          color: "white",
        }}>(We got answers)</span>
        </h1>
        <div className="div-block-104">
          <div className="div-block-105">
            <div className="accordiancontainer">
              <div>
                <div className="div-block-107" style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }} 
                onClick={() => setViewItem(0)}>
                  <h3 className="heading-31" style={{fontFamily: "'Fjalla'"}}>HOW TO ENTER?</h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 0 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      {`Our new promotion is LIVE...enter to win a Jeep Wrangler Unlimited High Altitude 4x4 + $10,000 CASH! With each purchase, you are automatically entered into our giveaway to WIN! Every $1 you spend gets you 5 entries into the giveaway...it's that easy!`}
                    </li>
                    <li className="accordianlist">
                      {`Become a member of the Hodge Twins/Bigly VIP Club and receive exclusive coupons, discounts, benefits, & more for only $9/month! VIP Club Members receive double bonus entries (18 entries/month) into each giveaway as long as they are an active member!`}
                    </li>
                    <li className="accordianlist">
                      {`Entries are automatically calculated at checkout and an email confirmation is sent with details on entries once your order is completed. All entries from orders placed while the giveaway is live are automatically tallied, combined, and saved for each customer so that once the giveaway concludes, customers receive all their entries.`}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }} onClick={() => setViewItem(1)}>
                  <h3 className="heading-31" style={{fontFamily: "'Fjalla'"}}>Is This Legit?</h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 1 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      <span className="boldtext">Yeaahhhh!! </span> We are
                      really giving away a Ram 2500 DIESEL + $10k Cash! No BS!
                      No gimmicks! You support the Twins and we give back to our
                      fans!
                    </li>
                    <li className="accordianlist">
                      All of our Giveaways are Federally Compliant and Legally
                      conducted through our Registered Giveaway Agency.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }} 
                onClick={() => setViewItem(2)}>
                  <h3 className="heading-31 boldtext" style={{fontFamily: "'Fjalla'"}}>
                    HOW IS THE WINNER SELECTED?
                  </h3>
                  <h3 className="heading-31">🔍</h3>
                </div>

                <div
                  className={`div-block-108 ${viewItem === 2 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      {`Winners are selected via a random computerized drawing
                        by our Giveaway Agency once the Giveaway has concluded.`}
                    </li>
                    <li className="accordianlist">
                      {`Once a winner has been drawn, we are notified to confirm
                        that the winner has no affiliation with our company.`}
                    </li>
                    <li className="accordianlist">
                      {`We legally cannot giveaway prizes to anyone affiliated
                        with us. Winners are re-drawn if there is any
                        affiliation between the winner and our company to ensure
                        100% legal compliance.`}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }} onClick={() => setViewItem(3)}>
                  <h3 className="heading-31 boldtext" >WHO IS BIGLY?</h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 3 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      {`Bigly is a Veteran-Owned small business that loves
                        giving cool sh*t away! From cash prizes, trucks,
                        merchandise, & more, we love what we do!`}
                    </li>
                    <li className="accordianlist">
                      {`All products from Bigly are designed, printed, & shipped
                        right here in the good ol' USA and our Wellness products
                        are 100% American Made in our own facilities here in
                        Oklahoma.`}
                    </li>
                    <li className="accordianlist">
                      {`Bigly specializes in high quality products, high quality
                        giveaways, and the best customer service in the nation!
                        "Shop with Bigly, and all your wildest dreams will come
                        true."`}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }} 
                onClick={() => setViewItem(4)}>
                  <h3 className="heading-31" style={{fontFamily: "'Fjalla'"}}>
                    {`WHAT IS THE HODGE TWINS/BIGLY VIP CLUB?`}
                  </h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 4 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      <a href="#TOP_OF_FORM">Learn More</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" onClick={() => setViewItem(5)}>
                  <h3 className="heading-31 boldtext" style={{fontFamily: "'Fjalla'"}}>WHO IS BIGLY?</h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 5 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      {`Don't contact us unless there's a fire. Thanks. Just
                        kidding. `}
                      <a href="tel:877-4624459(462-4459)" />
                    </li>
                    <li className="accordianlist">
                      {`We have a 24/7 Online Customer Support team ready to
                        help with any questions. Feel free to reach out at any
                        time!`}
                      <a href="tel:877-4624459(462-4459)" />
                    </li>
                    <li className="accordianlist">
                      Email:
                      <a href="mailto:info@officialhodgetwins.com">
                        {`info@officialhodgetwins.com`}
                      </a>
                      <br />
                      Phone:
                      <a href="tel:877-4624459(462-4459)">
                        {`877-GO BIGLY (462-4459)`}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4 wf-section" style={{
        background: "#F0EDE3",
        fontFamily: "'Fjalla'",
      }}>
        <div className="w-container">
          <div className="div-block-41">
            <h1 className="heading-15">RECENT GIVEAWAY WINNER</h1>
          </div>
          <div className="div-block-16">
            <IFrame
              videoId="_rCqBqFxiFE"
              title="Veteran wins a Ford Raptor! (Hodgetwins Giveaway)"
            />
          </div>
          <div className="div-block-15">
            <a href="#TOP_OF_FORM" className="button signup-button w-button">
              {`YES! I Want to ENTER & WIN!`}
            </a>
          </div>
        </div>
      </div>
      <div className="section-5 wf-section" style={{
        background: "#A3C8D3"
      }}>
        <div className="">
          <div className="div-block-22">
            <h2 className="heading-16" style={{
              fontSize:  windowWidth > 720 ? "" : "25px",
              lineHeight:  windowWidth > 720 ? "" : "25px",
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}>Hodge Twins / Bigly VIP Club</h2>
            <h2 className="heading-17" style={{
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}>(This ain't your ordinary Membership Club)
            </h2>
          </div>
          <div className="div-block-23" style={{
              textAlign: "center"
            }}>
            <p className="" style={{
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}>
              {`We got tired of seeing other boring Membership Clubs that only
                offer overpriced junk, so we made something way cooler and more
                affordable.`}
            </p>
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
          <div className="div-block-17" style={{
              paddingBottom: "2rem",
              fontFamily: "Fjalla"
            }}>
            <a href="#TOP_OF_FORM" className="button signup-button w-button" style={{
              fontFamily: "Fjalla"
              }}>
              {` Sign me up! I want to WIN!`}
            </a>
          </div>
        </div>
      </div>
      <Footer home />
    </div>
  );
}
