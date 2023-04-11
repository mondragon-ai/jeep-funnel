import MyImage from "./MyImage";

const Content2 = ({ viewItem, setViewItem, windowWidth }) => {
  return (
    <div className="section-3 wf-section">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "1rem",
        }}
      >
        {/* <div className="" style={{ 
        width: windowWidth > 720 ? "50%" : "80%",
        padding: "2rem 0"
        }}>
        <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/fd/0032b19687400baedb5c05ad884e87/Jeep.png"} />
      </div> */}
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          background: "black",
          marginBottom: "3rem",
        }}
      >
        {/* <div className="" style={{ 
        width: windowWidth > 720 ? "70%" : "93%",
        padding: "2rem 0"
        }}>
        <MyImage src={"https://hodgetwins.goingbigly.com/hosted/images/35/7f7e1c0e174d22a2b827fce86039a3/FINAL-JEEP-SPECS-1-.png"} />
      </div> */}
      </div>
      <div
        className="container-11"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <div
          className="div-block-12"
          style={{
            width: windowWidth > 720 ? "70%" : "90%",
            padding: windowWidth > 720 ? "1rem 0.5rem" : "1rem",
          }}
        >
          <p className="faq-p">
            {`People ask us, "Why are y'all giving away cash, free gas and trucks!?", and we'll tell you why...we got tired of paying big tech for expensive advertising and marketing, so we decided to do it our own way, and give back to you, our fans.People ask us, "Why are y'all giving away cash, free gas and trucks!?", and we'll tell you why...we got tired of paying big tech for expensive advertising and marketing, so we decided to do it our own way, and give back to you, our fans. `}
            <span className="text-span-37">give back to you, our fans</span>.
          </p>
          <p className="faq-p">
            {`We've been fortunate enough to give away over $500k+ worth of vehicles and prizes to our fans this year alone, and for our new promo, every purchase you make gets you entered to WIN A CHEVY 2500HD DURAMAX DIESEL + $10,000 CASH! 🔥`}
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
        <a
          href="#TOP_OF_FORM"
          className="button accent w-button"
          style={{
            fontFamily: "Fjalla",
            fontWeight: 700,
            margin: windowWidth > 720 ? "" : "0",
            maxWidth: windowWidth > 720 ? "" : "80%",
            fontSize: windowWidth > 720 ? "" : "20px",
            marginBottom: windowWidth > 720 ? "" : "2rem",
          }}
        >
          {`YES! I Want to WIN A FREE JEEP!`}
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 720 ? "row" : "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: windowWidth > 720 ? "600px" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: windowWidth > 720 ? "500px" : "auto",
                width: windowWidth > 720 ? "60%" : "95%",
                padding: "1rem",
              }}
            >
              <MyImage
                src="/images/High-Country-Funnel-Banner.jpg"
                className=""
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 720 ? "row" : "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: windowWidth > 720 ? "700px" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: windowWidth > 720 ? "500px" : "auto",
                width: windowWidth > 720 ? "600px" : "95%",
                padding: "1rem",
              }}
            >
              <MyImage src="/images/chevy-5.jpg" className="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: windowWidth > 720 ? "600px" : "95%",
                height: windowWidth > 720 ? "500px" : "auto",
                padding: "1rem",
              }}
            >
              <MyImage src="/images/IMG_2224.jpg" className="" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 720 ? "row" : "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: windowWidth > 720 ? "700px" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: windowWidth > 720 ? "500px" : "auto",
                width: windowWidth > 720 ? "600px" : "95%",
                padding: "1rem",
              }}
            >
              <MyImage src="/images/IMG_2225.jpg" className="" />
            </div>
          </div>
        </div>
        <div
          className="container-11"
          style={{
            maxWidth: windowWidth > 720 ? "70%" : "100%",
            padding: "2rem 0",
          }}
        >
          <div
            className="div-block-12"
            style={{
              maxWidth: windowWidth > 720 ? "70%" : "100%",
              padding: "1rem",
              color: "white",
              fontSize: windowWidth > 720 ? "30px" : "15px",
              fontWeight: "700",
              fontFamily: "Fjalla",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <span className="redtext boldtext">
                {`CHEVY 2500HD DURAMAX DIESEL `}
              </span>
              {`4X4`}
            </div>
            <div>
              <span className="redtext boldtext">{`6.6L V8 Duramax`} </span>
              {`Diesel Engine `}
            </div>
            <div>
              <span className="redtext boldtext">{`‍AUTOMATIC`}</span>
              {`Power Running Boards`}
            </div>
            <span className="redtext boldtext">
              ‍{`20" FUEL PERFORMANCE WHEELS  `}
            </span>
            {`Wrapped in 35" Mastercraft Courser Trail HD Tires  `}
          </div>
        </div>
        <div className="div-block-11">
          <h1
            className="heading-30"
            style={{
              fontSize: windowWidth > 720 ? "66px" : "30px",
              lineHeight: windowWidth > 720 ? "66px" : "35px",
              fontFamily: "'Fjalla'",
              padding: "0",
            }}
          >
            PAST GIVEAWAY WINNERS
            <br />‍
            <span
              className="text-span-38 boldtext"
              style={{
                fontSize: windowWidth > 720 ? "45px" : "25px",
                lineHeight: windowWidth > 720 ? "45px" : "25px",
              }}
            >
              THIS COULD BE YOU...
            </span>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---Raptor.jpg" className="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---Gladiator.jpg" className="" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---Stefanie.jpg" className="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---TRX.jpg" className="" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---Grover.jpg" className="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway---Monica.jpg" className="" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: windowWidth > 720 ? "row" : "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: windowWidth > 720 ? "row" : "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: windowWidth > 720 ? "600px" : "95%",
                  height: windowWidth > 720 ? "auto" : "auto",
                  padding: "2rem 1rem",
                }}
              >
                <MyImage src="/images/Giveaway - Teresa.jpg" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="heading-30"
        style={{
          fontSize: windowWidth > 720 ? "65px" : "45px",
          lineHeight: windowWidth > 720 ? "65px" : "45px",
          fontFamily: "Fjalla",
        }}
      >
        Got Questions?
        <br />‍
        <span
          className="text-span-38 boldtext"
          style={{
            fontSize: windowWidth > 720 ? "45px" : "25px",
            lineHeight: windowWidth > 720 ? "45px" : "25px",
            color: "white",
          }}
        >
          (We got answers)
        </span>
      </h1>
      <div className="div-block-104">
        <div className="div-block-105">
          <div className="accordiancontainer">
            <div>
              <div
                className="div-block-107"
                style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onClick={() => setViewItem(0)}
              >
                <h3 className="heading-31" style={{ fontFamily: "'Fjalla'" }}>
                  HOW TO ENTER?
                </h3>
                <h3 className="heading-31">🔍</h3>
              </div>
              <div
                className={`div-block-108 ${viewItem === 0 ? "active" : ""}`}
              >
                <ul role="list" className="list-5">
                  <li className="accordianlist">
                    {`Our new promotion is LIVE...enter to win a Chevy 2500HD High Country Diesel + $10,000 CASH! With each purchase, you are automatically entered into our giveaway to WIN! Every $1 you spend gets you 5 entries into the giveaway...it's that easy!`}
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
              <div
                className="div-block-107"
                style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onClick={() => setViewItem(1)}
              >
                <h3 className="heading-31" style={{ fontFamily: "'Fjalla'" }}>
                  Is This Legit?
                </h3>
                <h3 className="heading-31">🔍</h3>
              </div>
              <div
                className={`div-block-108 ${viewItem === 1 ? "active" : ""}`}
              >
                <ul role="list" className="list-5">
                  <li className="accordianlist">
                    <span className="boldtext">Yeaahhhh!! </span> We are really
                    giving away a Chevy 2500HD High Country Diesel + $10k Cash!
                    No BS! No gimmicks! You support the Twins and we give back
                    to our fans!
                  </li>
                  <li className="accordianlist">
                    All of our Giveaways are Federally Compliant and Legally
                    conducted through our Registered Giveaway Agency.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className="div-block-107"
                style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onClick={() => setViewItem(2)}
              >
                <h3
                  className="heading-31 boldtext"
                  style={{ fontFamily: "'Fjalla'" }}
                >
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
              <div
                className="div-block-107"
                style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onClick={() => setViewItem(3)}
              >
                <h3
                  className="heading-31 boldtext"
                  style={{ fontFamily: "'Fjalla'" }}
                >
                  WHO IS BIGLY?
                </h3>
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
              <div
                className="div-block-107"
                style={{
                  borderBottom: "0.3px solid #7E0606",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onClick={() => setViewItem(4)}
              >
                <h3 className="heading-31" style={{ fontFamily: "'Fjalla'" }}>
                  {`WHAT IS THE HODGE TWINS/BIGLY VIP CLUB?`}
                </h3>
                <h3 className="heading-31">🔍</h3>
              </div>
              <div
                className={`div-block-108 ${viewItem === 4 ? "active" : ""}`}
              >
                <ul role="list" className="list-5">
                  <li className="accordianlist">
                    <a href="#VIP_INFO">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="div-block-107" onClick={() => setViewItem(5)}>
                <h3
                  className="heading-31 boldtext"
                  style={{ fontFamily: "'Fjalla'" }}
                >
                  Coontact Us?
                </h3>
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
  );
};

export default Content2;
