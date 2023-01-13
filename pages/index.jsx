import { useContext, useState, useEffect } from "react";
import SignupFormContainer from "../containers/SignupFormContainer";
import OrderFormContainer from "../containers/OrderFormContainer";
import Footer from "../components/Footer";
import MyImage from "../components/MyImage";
import IFrame from "../components/IFrame";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { sendPageViewEvent } from "../lib/analytics";
<<<<<<< HEAD
import { Context } from "../context";
=======
import GlobalContext from "../context/globalContext";
>>>>>>> 74fa64e64a5816f45b95d554f1fd933455d7bff1

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

export default function Home() {
  const [viewItem, setViewItem] = useState(0);
  const [globalState] = useContext(Context);
  const { clientSecret } = globalState;

  useEffect(() => {
    sendPageViewEvent("OPT_IN"); // send page view event to google analytics
  }, []);

  const options = {
    clientSecret,
    // appearance: { theme: "stripe" },
    style: {
      base: {
        fontSize: "16px",
        fontWeight: "800",
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div className="body-4">
      <div className="section-2 wf-section">
        <div className="div-block-110" />
        <div className="container-7 w-container">
          <div className="w-row">
            <div className="column-6 w-col w-col-6">
              <div className="div-block-7">
                <MyImage
                  src="/images/Funnel-Banner-1-.jpg"
                  className="image-9"
                  alt="Pick a truck"
                />
              </div>
              <div className="div-block-8">
                <MyImage
                  src="/images/presented-by-hodge-bigly.png"
                  alt="Presented by the Hodge Twins and Bigly"
                />
              </div>
              <div className="div-block-9" />
              <div className="div-block-10">
                <h1 className="heading-10">
                  PICK YOUR TRUCK
                  <span className="text-span-9"> GIVEAWAY</span>
                </h1>
                <IFrame
                  videoId="3tgjwAbWxto"
                  className="w-embed-youtubevideo"
                  title="Veteran wins a Ford Raptor! (Hodgetwins Giveaway)"
                />
              </div>
            </div>
            <div id="TOP_OF_FORM" className="column-4 column-7 w-col w-col-6">
              <div className="div-block-30">
                <div>
                  <MyImage src="/images/SquarePick-a-Truck-1-both.jpg" />
                </div>
                <div className="div-block-38">
                  <h4
                    className="heading-33"
                    style={{
                      textAlign: "center",
                      color: "#ff5353",
                      fontSize: "25px",
                    }}
                  >
                    {` Every $1 SPENT = 1 Entry`}
                  </h4>
                  <h4 className="heading-34" style={{ textAlign: "center" }}>
                    {`Sign up & get your Patriot Bundle to Enter to WIN!`}
                  </h4>
                </div>
                <div className="div-block-37">
                  {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                      <OrderFormContainer />
                    </Elements>
                  ) : (
                    <SignupFormContainer />
                  )}
                </div>
              </div>
              <div className="div-block-32">
                <div className="div-block-33" />
                <div className="div-block-40" />
              </div>
              <div className="div-block-34">
                <p className="paragraph-26">
                  <a
                    href="https://goingbigly.com/pages/privacy-policy"
                    target="_parent"
                  >
                    <span className="text-span-18 entry-form-footer">
                      Privacy Policy
                    </span>
                  </a>
                  |
                  <a
                    href="https://goingbigly.com/pages/terms-of-service"
                    target="_parent"
                  >
                    <span className="text-span-17 entry-form-footer">
                      Terms of Service
                    </span>
                    ‍
                  </a>
                  See
                  <a
                    href="https://cdn.shopify.com/s/files/1/0612/0593/8348/files/Hodgetwins_Gas_Giveaway_1_pdf.pdf?v=1658242977"
                    target="_parent"
                  >
                    <span className="text-span-16 entry-form-footer">
                      {`Official Rules`}
                    </span>
                  </a>
                  {`for Alternate Methods`}
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
              🇺🇸
              <span className="text-span-10 boldtext">
                {" VETERAN-OWNED COMPANY "}
              </span>
              🇺🇸
              <div style={{ marginTop: 30 }}>
                {`A portion of all proceeds benefit Veterans, First Responders,
                  & their families.`}
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="section-3 wf-section">
        <div className="container-11 w-container">
          <div className="div-block-12">
            <p className="faq-p">
              {` People ask us, "Why are y'all giving away cash, free gas and
                trucks!?", and we'll tell you why...we got tired of paying big
                tech for expensive advertising and marketing, so we decided to
                do it our own way, and `}
              <span className="text-span-37">give back to you, our fans</span>.
            </p>
            <p className="faq-p">
              {`We've been fortunate enough to give away over $400k+ worth of
                vehicles and prizes to our fans this year alone, and for our new
                promo, every purchase you make gets you entered to`}
              <span className="text-span-36">
                {`WIN A 2022 CHEVY 2500 DURAMAX DIESEL 4X4 OR A 2022 RAM TRX
                  WITH A 702 HP SUPERCHARGED HEMI...+ $10,000 CASH! 🔥`}
              </span>
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
          <div className="div-block-109">
            <MyImage
              src="/images/vegas-truck-shoot-10-plate.jpg"
              className="img"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="div-block-101">
            <div className="text-block-8">
              <div>
                <span className="redtext boldtext">
                  {`2022 CHEVY 2500 HIGH COUNTRY `}
                </span>
                {`4X4`}
              </div>
              <div>
                <span className="redtext boldtext">{`6.6L DURAMAX® `} </span>
                {`TURBO
                  DIESEL ENGINE`}
              </div>
              <div>
                <span className="redtext boldtext">{`‍BOSE® PREMIUM `}</span>
                {`SOUND SYSTEM`}
              </div>
              <span className="redtext boldtext">
                ‍{`20" FUEL PERFORMANCE WHEELS `}
              </span>
              {`wrapped in 35" Cooper Rugged Trek Tires`}
            </div>
          </div>
          <div className="div-block-102">
            <MyImage src="/images/IMG_2224.jpg" className="item" />
            <MyImage src="/images/chevy-5.jpg" className="item" />
            <MyImage
              src="/images/IMG_2245.jpg"
              className="item"
              style={{ alignSelf: "start" }}
            />
            <div className="item">
              <div
                style={{ maxWidth: 463, marginBottom: 20, marginTop: 10 }}
                className="text-block-8"
              >
                <div>
                  <span className="redtext boldtext">2022 RAM TRX </span> 4X4
                </div>
                <div>
                  <span className="text-span-40 boldtext">
                    SUPERCHARGED 702HP
                  </span>
                  6.2L HEMI ENGINE‍
                </div>
                <div>
                  <span className="text-span-41 boldtext">{`ALPINE®`}</span>
                  PREMIUM SOUND SYSTEM
                </div>
                <div>
                  <span className="text-span-42 boldtext">
                    {`UCONNECT® 8.4"`}
                  </span>
                  TOUCHSCREEN
                </div>
                ‍
              </div>
              <MyImage src="/images/vegas-truck-shoot-4-plate.jpg" />
            </div>
          </div>
          <div className="div-block-109">
            <MyImage
              src="/images/vegas-truck-shoot-3-plate-change.jpg"
              className="img"
              style={{ objectFit: "contain", marginBottom: 50 }}
            />
          </div>
          <a href="#TOP_OF_FORM" className="button accent w-button">
            {`YES! I Want to WIN A FREE RAM!`}
          </a>
          <div className="div-block-11">
            <h1 className="heading-30">
              PAST GIVEAWAY WINNERS
              <br />‍
              <span className="text-span-38 boldtext">
                THIS COULD BE YOU...
              </span>
            </h1>
            <div className="div-block-103">
              <MyImage src="/images/Giveaway---Gladiator.png" />
              <MyImage src="/images/Giveaway---TRX.png" />
              <MyImage src="/images/Giveaway---Stefanie.png" />
              <MyImage src="/images/Giveaway---Raptor.png" />
            </div>
          </div>
        </div>
        <h1 className="heading-30">
          Got Questions?
          <br />‍<span className="text-span-38 boldtext">We got answers</span>
        </h1>
        <div className="div-block-104">
          <div className="div-block-105">
            <div className="accordiancontainer">
              <div>
                <div className="div-block-107" onClick={() => setViewItem(0)}>
                  <h3 className="heading-31">HOW TO ENTER?</h3>
                  <h3 className="heading-31">🔍</h3>
                </div>
                <div
                  className={`div-block-108 ${viewItem === 0 ? "active" : ""}`}
                >
                  <ul role="list" className="list-5">
                    <li className="accordianlist">
                      {`Our new giveaway promotion is LIVE...we giving away a
                        2022 Ram 2500 CUMMINS DIESEL 4x4 + $10,000 CASH! With
                        each purchase, you are automatically entered into our
                        giveaway to WIN! Every $1 you spend gets you 1 entry
                        into the giveaway...it's that easy!`}
                    </li>
                    <li className="accordianlist">
                      {`Become a member of the Hodge Twins/Bigly VIP Club and
                        receive exclusive coupons, discounts, benefits, & more
                        for only $9/month! VIP Club Members receive double bonus
                        entries (18 entries/month) into each giveaway as long as
                        they are an active member!`}
                    </li>
                    <li className="accordianlist">
                      {`Entries are automatically calculated at checkout and an
                        email confirmation is sent with details on entries once
                        your order is completed. All entries from orders placed
                        while the giveaway is live are automatically tallied,
                        combined, and saved for each customer so that once the
                        giveaway concludes, customers receive all their entries.`}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="div-block-107" onClick={() => setViewItem(1)}>
                  <h3 className="heading-31">Is This Legit?</h3>
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
                <div className="div-block-107" onClick={() => setViewItem(2)}>
                  <h3 className="heading-31 boldtext">
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
                <div className="div-block-107" onClick={() => setViewItem(3)}>
                  <h3 className="heading-31 boldtext">WHO IS BIGLY?</h3>
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
                <div className="div-block-107" onClick={() => setViewItem(4)}>
                  <h3 className="heading-31">
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
                  <h3 className="heading-31 boldtext">WHO IS BIGLY?</h3>
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
      <div className="section-4 wf-section">
        <div className="w-container">
          <div className="div-block-14">
            <a href="#TOP_OF_FORM" className="button signup-button w-button">
              YES! I Want to WIN FREE GAS!
            </a>
          </div>
          <div className="div-block-41">
            <h2 className="heading-15">RECENT GIVEAWAY WINNER</h2>
            <h2 className="heading-14">THIS COULD BE YOU...</h2>
          </div>
          <div className="div-block-16">
            <IFrame
              videoId="_rCqBqFxiFE"
              title="Veteran wins a Ford Raptor! (Hodgetwins Giveaway)"
            />
          </div>
          <div className="div-block-15">
            <a href="#TOP_OF_FORM" className="button signup-button w-button">
              {`YES! I Want to WIN FREE GAS!`}
            </a>
          </div>
        </div>
      </div>
      <div className="section-5 wf-section">
        <div className="w-container">
          <div className="div-block-22">
            <h2 className="heading-16">{`Hodge Twins / Bigly VIP Club`}</h2>
            <h2 className="heading-17">
              {` (This ain't your ordinary Membership Club)`}
            </h2>
          </div>
          <div className="div-block-23">
            <p className="paragraph-23 vip-p">
              {`We got tired of seeing other boring Membership Clubs that only
                offer overpriced junk, so we made something way cooler and more
                affordable.`}
            </p>
          </div>
          <div className="w-row">
            <div className="column-5 w-col w-col-6">
              <div className="div-block-24">
                <p className="paragraph-24 vip-p">
                  {`Become a member of the Hodge Twins/Bigly VIP Club and
                    receive exclusive Members-Only monthly coupons, giveaways,
                    discounts, benefits, & more!`}
                </p>
              </div>
              <div className="div-block-25">
                <p className="paragraph-25 vip-p">
                  {`VIP Members receive double bonus entries (18 entries/month)
                    into each giveaway as long as you are an active member!`}
                </p>
              </div>
              <div className="div-block-26">
                <ul role="list" className="list-4">
                  <li className="list-item-9">
                    <span className="boldtext">{`Monthly Coupons: `}</span>
                    {` VIP
                      Club Members receive TWO free $10.00 coupons to use at
                      OfficialHodgetwins.com & GoBigly.com. That is a free
                      $20.00 that we send to you each month!`}
                  </li>
                  <li className="list-item-6">
                    <span className="boldtext">{`Members Only Giveaways: `}</span>
                    {`Club Members have a chance to win exclusive Members-Only
                      prizes each month!`}
                  </li>
                </ul>
              </div>
              <div className="div-block-27">
                <ul role="list" className="list-3">
                  <li className="list-item-10">
                    <span className="boldtext">{`Exclusive Discounts: `}</span>
                    {`Get
                      20% OFF storewide, no exceptions!`}
                  </li>
                  <li className="list-item-7">
                    <span className="boldtext">{`Double Bonus Entries: `}</span>
                    {`Club Members receive 18 entries per month into the current
                      giveaway, as long as you are an active member!`}
                  </li>
                  <li className="list-item-8">
                    <span className="boldtext">{`Exclusive Products: `}</span>
                    {`Access exclusive products only available to Club Members!`}
                  </li>
                </ul>
              </div>
            </div>
            <div className="column-3 w-col w-col-6">
              <div className="div-block-21">
                <MyImage
                  src="/images/club-banner-funnel-png-transparent-1-.png"
                  alt="Hodge Twins and Bigly product offers"
                />
              </div>
            </div>
          </div>
          <div className="div-block-17">
            <a href="#TOP_OF_FORM" className="button signup-button w-button">
              {` Sign me up! I want to WIN!`}
            </a>
          </div>
        </div>
      </div>
      <Footer home />
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   sendPageViewEvent("OPT_IN");
//   return { props: {} };
// }
