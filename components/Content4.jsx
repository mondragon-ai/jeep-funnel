import MyImage from "./MyImage";

const Content4 = ({ windowWidth }) => {
  return (
    <div
      className="section-5 wf-section"
      style={{
        background: "#A3C8D3",
      }}
    >
      <div className="">
        <div className="div-block-22">
          <h2
            className="heading-16"
            id={"VIP_INFO"}
            style={{
              fontSize: windowWidth > 720 ? "" : "25px",
              lineHeight: windowWidth > 720 ? "" : "25px",
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}
          >
            Hodge Twins / Bigly VIP Club
          </h2>
          <h2
            className="heading-17"
            style={{
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}
          >
            (This ain't your ordinary Membership Club)
          </h2>
        </div>
        <div
          className="div-block-23"
          style={{
            textAlign: "center",
          }}
        >
          <p
            className=""
            style={{
              color: "rgb(16, 40, 76)",
              fontFamily: "'Fjalla'",
            }}
          >
            {`We got tired of seeing other boring Membership Clubs that only
            offer overpriced junk, so we made something way cooler and more
            affordable.`}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(16, 40, 76)",
            fontFamily: "'Fjalla'",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: windowWidth > 720 ? "row" : "column",
              justifyContent: "center",
              width: windowWidth > 720 ? "80%" : "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                width: "300px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/d1/09d9b098c740b28b727b900bcb99b6/Coins.png"
                  }
                />
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  padding: "0 2rem",
                }}
              >
                Monthly <br />
                Member Credits
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                textAlign: "center",
                padding: "0 2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/dc/5821281242414c9c54cf107ac9a173/Winner.png"
                  }
                />
              </div>
              <h3 style={{ fontSize: "20px" }}>
                Automatic DOUBLE Entries into ALL Giveaways
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                textAlign: "center",
                padding: "0 2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/a7/16a9dc49e24f3eb88e8e70161f9ed7/Sale.png"
                  }
                />
              </div>
              <h3 style={{ fontSize: "20px" }}>
                Hodgetwins Gear at the Best Prices
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/62/360aa636b541ff8fca64a957b49400/VIPexclusive.png"
                  }
                />
              </div>
              <h3 style={{ fontSize: "20px" }}>
                #Exclusive Monthly VIP-ONLY Giveaways
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                textAlign: "center",
                padding: "0 2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/6d/0c3cec709647df8bb8b4372d104f5b/Exclusive.png"
                  }
                />
              </div>
              <h3 style={{ fontSize: "20px" }}>
                Early Access to Products, Promos, and Giveaways
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "300px",
                padding: "0 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100px",
                  width: "100px",
                }}
              >
                <MyImage
                  src={
                    "https://hodgetwins.goingbigly.com/hosted/images/5b/3d058c28214449ac015923f85fd466/Calendar.png"
                  }
                />
              </div>
              <h3 style={{ fontSize: "20px" }}>Unlimited Skips</h3>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <MyImage
              src={
                "https://hodgetwins.goingbigly.com/hosted/images/86/7c101b9eb140fbae19453daa888e22/official-hodge-twins-4-.png"
              }
            />
          </div>
        </div>
        <div
          className="div-block-17"
          style={{
            paddingBottom: "2rem",
            fontFamily: "Fjalla",
          }}
        >
          <a
            href="#TOP_OF_FORM"
            className="button signup-button w-button"
            style={{
              fontFamily: "Fjalla",
            }}
          >
            {` Sign me up! I want to WIN!`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content4;
