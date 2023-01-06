function Footer({ home }) {
  return (
    <div className="section-6 wf-section">
      <div className="container-8 w-container">
        {home && (
          <>
            <div className="div-block-20">
              <p className="paragraph-19 footer-p">
                <strong>
                  {`* * * LIMIT OF ONE THOUSAND (1,000) ENTRIES PER PERSON * * *
                  NO PURCHASE OR PAYMENT OF ANY KIND IS NECESSARY TO ENTER OR
                  WIN. PURCHASE OR PAYMENT DOES NOT IMPROVE YOUR CHANCE OF
                  WINNING. The Hodgetwins #6 is open only to legal residents of
                  the 48 contiguous U.S. States and D.C. (excluding FL and NY)
                  who have reached the age of majority. Void elsewhere and where
                  prohibited. Promotion ends 11/30/2022. Winner must pick up
                  vehicle from a location in Nevada or Arkansas, designated by
                  Sponsor. Subject to complete`}
                </strong>
                <a
                  href="https://cdn.shopify.com/s/files/1/0612/0593/8348/files/Hodgetwins_Sweepstakes_6_Diesel.pdf?v=1664821548"
                  target="_parent"
                >
                  <strong>Official Rules</strong>
                </a>
                <strong>
                  {`. This promotion is in no way sponsored, endorsed or
                  administered by, or associated with Twitter, Instagram or
                  YouTube and you understand that you are providing your
                  information to Sponsor and not to these platforms. Your
                  personal information will only be used in accordance with
                  Sponsor’s Privacy Policy and as permitted by law.`}
                </strong>
              </p>
            </div>
            <div className="div-block-19">
              <p className="paragraph-21 footer-p">
                <strong className="bold-text-9">
                  {`* * *This promotion/giveaway is in no way sponsored, endorsed,
                  administered, or associated with Instagram, Facebook, Twitter,
                  TikTok, Snapchat, Google, or Microsoft.Bigly is in no way
                  affiliated with any brand or company whose products are
                  offered as prizes in any sweepstakes offered by Bigly.`}
                </strong>
              </p>
            </div>
          </>
        )}

        <div className="div-block-18">
          <img
            src="/images/bigly-logo.png"
            loading="lazy"
            alt="Bigly logo"
            className="image-10 footer-img"
          />
        </div>
        <div className="div-block-35">
          <p className="paragraph-22">
            <a
              href="https://goingbigly.com/pages/privacy-policy"
              target="_parent"
            >
              <span className="text-span-15 footer-a">Privacy Policy</span>
              {" | "}
            </a>
            <a
              href="https://goingbigly.com/pages/terms-of-service"
              target="_parent"
            >
              <span className="text-span-13 footer-a">Terms of Service</span>
              {" | "}
            </a>
            <a href="https://goingbigly.com/pages/contact-us" target="_parent">
              <span className="text-span-12 footer-a">Contact Us</span>
              <br />
            </a>
            <span className="text-span-11">
              {` GoingBigly © 2021 - All Rights Reserved`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
