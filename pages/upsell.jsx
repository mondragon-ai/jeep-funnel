import { useState, useEffect, useContext } from "react";
import Upsell_ListItem from "../components/Upsell_ListItem";
import Footer from "../components/Footer";
import { imPoweredRequest } from "../lib/request";
import { Context } from "../context";
import { sendPageViewEvent } from "../lib/analytics";

const Upsell = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVIP, setShowVIP] = useState("");
  const [globalState, setGlobalState] = useContext(Context);
  const [clientOrigin, setClientOrigin] = useState("http://localhost:3000");

  useEffect(() => {
    sendPageViewEvent("UPSELL"); // send page view event to google analytics
    setClientOrigin(window.location.origin); // set client origin
    setTimeout(() => setMessage(""), 5000);
  }, []);

  const signUpForFreeDecals = async () => {
    try {
      setIsLoading(true);
      const payload = createPayloadFromOrder();
      const response = await imPoweredRequest(
        "POST",
        "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/payments/quick-sub",
        payload
      );

      if (!response) {
        throw new Error(
          `We're sorry, you couldn't sign up. Please try refreshing the page and try again.`
        );
      }

      updateGlobalState(); // update global state

      // if (response.ok) {
      window.location.href = `${clientOrigin}/congratulations`;
      // }
    } catch (e) {
      setMessage(e.message);
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const declineFreeDecals = async () => {
    setIsLoading(true);
    window.location.href = "https://officialhodgetwins.com/";
    setIsLoading(false);
  };

  const createPayloadFromOrder = () => {
    try {
      const { cus_uuid, high_risk, funnel_uuid } = globalState;
      return {
        cus_uuid,
        product: {
          high_risk: false,
          title: "VIP Membership",
          sku: "VIP-CLUB",
          price: 4000,
          compare_at_price: 0,
          handle: "",
          options1: "",
          options2: "",
          options3: "",
          weight: 0,
          variant_id: 42235971567788,
          quantity: 1,
        },
        high_risk,
        funnel_uuid,
      };
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateGlobalState = () => {
    setGlobalState({
      ...globalState,
      products: [
        ...globalState.products,
        { title: "VIP Membership", price_num: 4000 },
      ],
    });
  };

  const showVIPClubInfo = () => setShowVIP(!showVIP);

  return (
    <div>
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
                for just $9.00 and claim your FREE Decals below!
              </p>
            </div>

            <div className="div-block-88">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item active">
                  <div
                    className="accordion-header js-accordion-header"
                    onClick={showVIPClubInfo}
                  >
                    <span style={{ fontSize: 14 }} className="boldtext">
                      What is the Hodge Twins/Bigly VIP Club?
                    </span>
                    <img
                      src="/images/1947308-200.png"
                      loading="lazy"
                      alt="Bigly logo"
                      className
                      width={20}
                      height={20}
                    />
                  </div>
                  {showVIP && (
                    <div
                      className="accordion-body js-accordion-body"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="accordion-body__contents">
                        <div
                          className="container fullContainer noTopMargin padding20-top padding20-bottom padding40H noBorder borderSolid border3px cornersAll radius0 shadow0 bgCover101 emptySection"
                          id="section--44513"
                          style={{
                            paddingTop: "60px",
                            paddingBottom: "100px",
                            backgroundImage: 'url("/images/bottom-bg2.jpg")',
                            outline: "none",
                          }}
                        >
                          <div className="containerInner ui-sortable">
                            <div
                              className="row bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                              id="row-185"
                              style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                margin: "0px",
                                outline: "none",
                              }}
                            >
                              <div
                                id="col-full-111-127"
                                className="col-md-12 innerContent col_left"
                                style={{ outline: "none" }}
                              >
                                <div
                                  className="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                                  style={{ padding: "0 10px" }}
                                >
                                  <div
                                    className="de elHeadlineWrapper ui-droppable de-editable"
                                    id="tmp_headline1-58698-155"
                                  >
                                    <h1
                                      className="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0 mfs_40"
                                      style={{
                                        textAlign: "center",
                                        fontSize: "62px",
                                        color: "rgb(0, 0, 0)",
                                        lineHeight: "65px",
                                      }}
                                    >
                                      Hodge Twins/Bigly VIP Club&nbsp;
                                    </h1>
                                  </div>
                                  <div
                                    className="de elHeadlineWrapper ui-droppable de-editable"
                                    id="headline-45583-176"
                                  >
                                    <h1
                                      className="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0 mfs_28"
                                      style={{
                                        textAlign: "center",
                                        fontSize: "32px",
                                        color: "rgb(0, 0, 0)",
                                      }}
                                    >
                                      {`(This ain't your ordinary Membership Club)`}
                                    </h1>
                                  </div>
                                  <div
                                    className="de elHeadlineWrapper ui-droppable de-editable"
                                    id="tmp_paragraph-12989-100"
                                  >
                                    <div
                                      className="ne elHeadline hsSize1 lh5 elMargin0 elBGStyle0 hsTextShadow0 mfs_18"
                                      style={{
                                        textAlign: "center",
                                        color: "rgb(0, 0, 0)",
                                        fontSize: "24px",
                                      }}
                                    >
                                      We got tired of seeing other boring
                                      Membership Clubs that only offer
                                      overpriced junk, so we made something way
                                      cooler and more affordable.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                              id="row-110"
                              style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                margin: "0px",
                                outline: "none",
                              }}
                            >
                              <div
                                id="col-left-124-170"
                                className="col-md-6 innerContent col_left ui-resizable"
                                style={{ outline: "none" }}
                              >
                                <div
                                  className="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                                  style={{ padding: "0 10px" }}
                                >
                                  <div
                                    className="de elHeadlineWrapper ui-droppable de-editable"
                                    id="headline-66246-163"
                                  >
                                    <div
                                      className="ne elHeadline hsSize1 lh5 elMargin0 elBGStyle0 hsTextShadow0 mfs_18"
                                      style={{
                                        textAlign: "center",
                                        color: "rgb(0, 0, 0)",
                                        fontSize: "24px",
                                        marginBottom: "2rem",
                                      }}
                                    >
                                      Become a member of the Hodge Twins/Bigly
                                      VIP Club and receive exclusive
                                      Members-Only monthly coupons, giveaways,
                                      discounts, benefits, &amp; more! <br />
                                      <br />
                                      VIP Members receive double bonus entries
                                      (18 entries/month) into each giveaway as
                                      long as you are an active member!
                                      <br />
                                    </div>
                                  </div>

                                  <Upsell_ListItem
                                    text={`<b>Monthly Coupons:</b>&nbsp;VIP Club
                                      Members receive TWO free $10.00 coupons to
                                      use at OfficialHodgetwins.com &amp;
                                      GoBigly.com. That is a free $20.00 that we
                                      send to you each month!`}
                                  />

                                  <Upsell_ListItem
                                    text={` <b>Members Only Giveaways:&nbsp;</b>Club
                                      Members have a chance to win exclusive
                                      Members-Only prizes each month!`}
                                  />

                                  <Upsell_ListItem
                                    text={`<b>Exclusive Discounts: </b>Get 20% OFF
                                      storewide, no exceptions!&nbsp;`}
                                  />

                                  <Upsell_ListItem
                                    text={`<b>Double Bonus Entries:&nbsp;</b>Club
                                      Members receive 18 entries per month into
                                      the current giveaway, as long as you are
                                      an active member!`}
                                  />

                                  <Upsell_ListItem
                                    text={`<b>Exclusive Products: </b>Access
                                      exclusive products only available to Club
                                      Members!`}
                                  />

                                  <Upsell_ListItem
                                    text={`<b>Free Shipping: </b>Members get free
                                      shipping on all orders!`}
                                  />
                                </div>
                              </div>
                              <div
                                id="col-right-136-130"
                                className="col-md-6 innerContent col_right ui-resizable"
                                style={{ outline: "none" }}
                              >
                                <div
                                  className="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                                  style={{ padding: "0 10px" }}
                                >
                                  <div
                                    className="de elImageWrapper de-editable de-image-block elAlign_center elMargin0 hiddenElementTools ui-droppable"
                                    id="tmp_image-95784"
                                    style={{
                                      marginTop: "30px",
                                      outline: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src="/images/club-banner-funnel-png-transparent.png"
                                      className="elIMG ximg"
                                      alt=""
                                      tabIndex={0}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
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
                                className="col-md-12 innerContent col_left"
                                style={{ outline: "none" }}
                              >
                                <div
                                  className="col-inner bgCover  noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
                                  style={{ padding: "0 10px" }}
                                >
                                  <div
                                    className="de elBTN elAlign_center elMargin0 ui-droppable de-editable"
                                    id="button-93414"
                                  >
                                    <a
                                      href="upsell.html#tmp_button-70655"
                                      className="elButton elButtonSize1 elButtonColor1 elButtonRounded elButtonPadding2 elButtonFluid no-button-effect elBtnVP_00 elBtnHP_00 mfs_21 elButtonCorner3 elBTN_b_1 elButtonShadow3 elButtonTxtColor5"
                                      style={{
                                        color: "rgb(255, 255, 255)",
                                        fontWeight: 600,
                                        backgroundColor: "rgb(220, 10, 10)",
                                        fontSize: "34px",
                                      }}
                                      rel="noopener noreferrer"
                                      id="undefined-619-229-76"
                                    >
                                      <span className="elButtonMain">
                                        Sign me up! I want to WIN!
                                      </span>
                                      <span className="elButtonSub" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                  src="images/patriot-pack-2.png"
                  loading="lazy"
                  srcSet="images/patriot-pack-2.png 500w"
                  sizes="(max-width: 479px) 57vw, (max-width: 767px) 50vw, (max-width: 991px) 23vw, 24vw"
                  alt="Patriot decal pack"
                  className="image-15"
                />
              </div>
              <div className="div-block-64">
                <h3 className="heading-26">
                  PATRIOT PACK - Decals (1 Of Each Style)
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
                      : `Yes! Claim my Free Decals and Sign me up!`}
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
