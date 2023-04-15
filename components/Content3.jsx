import dynamic from "next/dynamic";
const IFrame = dynamic(() => import("../components/IFrame"));

const Content3 = () => {
  return (
    <div
      className="section-4 wf-section"
      style={{
        background: "#F0EDE3",
        fontFamily: "'Fjalla'",
      }}
    >
      <div className="w-container">
        <div className="div-block-41">
          <h1 className="heading-15">RECENT GIVEAWAY WINNER</h1>
        </div>
        <div className="div-block-16">
          <IFrame
            videoId="5CqxDD5ob8k"
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
  );
};

export default Content3;
