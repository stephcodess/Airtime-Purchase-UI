import TestimonialComponent from "./testimonial";
import TypeAnimation from "react-type-animation";
import HomeServices from "../../components/home/services";
import Fast from "../../assets/images/fast.svg";
import Pay from "../../assets/images/pay.svg"
import { Link } from "react-router-dom";
import { REGISTER } from "../../constants/routeNames";
function ContentWrapper() {
  return (
    <div className="v-bg-stylish">
      <div className="bg-light">
        <div className="container">
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

          <div className="row justify-content-between">
            <div className="col-md-6 col-12 px-1 mt-3 mb-1 mt-md-3">
              <div className="col-md-11 col-11 m-auto introtext">
                <img
                    src={Pay}
                    alt=""
                    className="my-4"
                    width="100%"
                    height="50%"
                  />
                <div className="feature-box">
                  <div className="feature-box-text clearfix">
                    <h3>Pay Bills Payment At Ease</h3>
                    <div className="feature-box-text-inner">
                      <p>
                        With fidpress you can conveniently pay electricity bills
                        for all discos in Nigeria, Subscribe Gotv, dstv,
                        spectranet..., and get connected in less than a second.{" "}
                        <br />
                      </p>
                      <Link
                      to={REGISTER}
                      className="read-more text-primary"
                    >
                      See how it works
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 px-1 mt-5 mb-3 mt-md-3">
              <div className="col-md-11 col-11 m-auto introtext">
              <img
                    src={Fast}
                    alt=""
                    className="my-4"
                    width="100%"
                    height="50%"
                  />
                <div className="feature-box">
                  <div className="feature-box-text">
                  <h3>Fast &amp; Reliable Services</h3>
                    <div className="feature-box-text-inner">
                      <p>
                        We're fully automated and connected to all Nigeria
                        TELCOs, buy cheap data subscription that works on all
                        devices, buy phone airtime online.
                        <br />
                      </p>
                      <Link
                      to={REGISTER}
                      className="read-more text-primary"
                    >
                      See how it works
                    </Link>
                    </div>
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
