function FormOne() {
  return (
    <div className="formcard" id="FORM_ONE">
      <div>
        <img
          src="/images/wtb-wb-dtom-decal.png"
          loading="lazy"
          srcSet="/images/wtb-wb-dtom-decal.png 500w, /images/wtb-wb-dtom-decal.png 800w, /images/wtb-wb-dtom-decal.png 1080w, /images/wtb-wb-dtom-decal.png 2000w"
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="div-block-37">
        <div className="input-group">
          <input
            defaultValue=""
            className="form-control"
            type="text"
            name="first_name"
            id="first_name"
            required
            placeholder="First Name"
          />
          <label htmlFor="first_name">First Name</label>
          <div className="req-mark">!</div>
        </div>
        <div className="input-group">
          <input
            defaultValue=""
            className="form-control"
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
          <label htmlFor="email">Email</label>
          <div className="req-mark">!</div>
        </div>
        <div>
          <p id="ERROR" />
        </div>
      </div>
      <div className="checkboxtextcontainer">
        <div className="checkbox">
          <input
            type="checkbox"
            name="accept_email_marketing"
            id="accept_email_marketing"
            defaultChecked
          />
        </div>
        <div>
          <div className="text-block-5">
            I agree to the Terms of Service and Privacy Policy. I agree to
            receive news, updates, exclusive offers.
          </div>
        </div>
      </div>
      <div id="FORM_ONE_BTN" className="funnelbtn">
        <h4 className="btntext">ENTER NOW</h4>
      </div>
    </div>
  );
}

export default FormOne;
