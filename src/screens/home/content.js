import TestimonialComponent from "./testimonial";
import TypeAnimation from "react-type-animation";
import HomeServices from "../../components/home/services";
function ContentWrapper() {
  return (
      <div className="v-bg-stylish">
        <div className="bg-light">
        <div className="container bg-height">
          <div className="row center">
            <div className="col-12 d-flex flex-column align-items-center mt-5">
              <div className="cd-intro">
                <h1 className="mt-0 text-center">
                  <span>The Fastest, Easiest Way To </span>

                  <span className="cd-words-wrapper" style={{ width: 171 }}>
                    <TypeAnimation
                      cursor={true}
                      repeat={1000}
                      sequence={[
                        "Pay Electricity",
                        3000,
                        "",
                        "Recharge Airtime",
                        5000,
                        "",
                        "Buy Data",
                        3000,
                        "",
                        "Subscribe Cable",
                        3000,
                        "",
                        "Send SMS",
                        3000,
                        "Send SMS",
                      ]}
                      wrapper="b"
                    />
                  </span>
                </h1>
              </div>

              <p className="v-lead-v2 pull-bottom">
                Amazing cashback upto 7% on every recharge.
              </p>

              <div className="nhr nhr-short mb-1">
                <span className="nhr-inner">
                  <span className="nhr-inner-style-circle"></span>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-12 mt-3 mb-3 mt-lg-3">
              <div className="feature-box">
                <div className="feature-box-text clearfix">
                  <h3>Pay Bills Payment At Ease</h3>
                  <div className="feature-box-text-inner">
                    <p>
                      With Payscribe.ng you can conveniently pay electricity
                      bills for all discos in Nigeria, Subscribe Gotv, dstv,
                      spectranet..., and get connected in less than a second.{" "}
                      <br />
                    </p>
                    <a
                      href="https://www.payscribe.ng/page/how-it-works"
                      className="read-more text-primary"
                    >
                      See how it works
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-5 mb-3 mt-lg-3">
              <div className="feature-box">
                <div className="feature-box-text">
                  <h3>Airtime &amp; Cheap Data Subscription</h3>
                  <div className="feature-box-text-inner">
                    <p>
                      We're fully automated and connected to all Nigeria TELCOs,
                      buy cheap data subscription that works on all devices, buy
                      phone airtime online.
                      <br />
                    </p>
                    <a
                      href="https://www.payscribe.ng/page/data_pricing"
                      className="read-more text-primary"
                    >
                      See Data Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-5 mb-3 mt-lg-3">
              <div className="feature-box">
                <div className="feature-box-text">
                  <h3>Stay Connected</h3>
                  <div className="feature-box-text-inner">
                    <p>
                      Payscribe.ng can handle all your recurring bills while you
                      do other thing that matters to you. <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <HomeServices />
        <TestimonialComponent />
      </div>
      
  );
}
export default ContentWrapper;
