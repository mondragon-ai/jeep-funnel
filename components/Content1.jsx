import MyImage from "./MyImage";

const Content1 = () => {
  return (
    <div className="wf-section">
      <div className="w-container">
        <div className="div-block-36">
          <h2 className="heading-11">
            <div style={{ marginTop: 30 }}>
              <MyImage src={"/images/Made-For-America-1-1-.png"} />
            </div>
            <div style={{ marginTop: 30 }}>
              {`A portion of all proceeds benefit Veterans, First Responders, & their families.`}
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Content1;
