import { Component } from "react";
import Slider from "react-slick";
import AVATAR from "../../assets/images/user-review.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        fontWeight: "bolder",
      }}
      onClick={onClick}
    />
  );
}

export default class TestimonialComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
        
          <div className="v-bg-stylish my-5">
            <div className="container my-5">
              <div className="row center">
                <div className="col-sm-12 text-center mt-5 mb-5">
                  <h1 className="v-smash-text-large mt-0">
                    What Our Customers Are Saying
                  </h1>

                  <p className="v-lead-v2 pull-bottom">
                    Be part of the amazing team
                  </p>

                  <div className="nhr nhr-short">
                    <span className="nhr-inner">
                      <span className="nhr-inner-style-circle"></span>
                    </span>
                  </div>

                  <div className="v-spacer col-sm-12 v-height-mini"></div>
                </div>
              </div>
              <div className="row mt-1">
              <Slider {...settings}>
                <div className="col-sm-4">
                  <div
                    // style={styles.testimonial}
                    className="testimonial d-flex flex-row justify-content-between align-items-start"
                    data-aos="zoom-out-up"
                    data-aos-delay="0"
                  >
                    <div className="testimonial-author col-3 mx-3">
                      <figure
                        className="featured-thumbnail col-12"
                        style={{
                          borderRadius: "50%",
                          border: "7px solid purple",
                        }}
                      >
                        <img
                          className="col-12"
                          src={AVATAR}
                          alt="User Review - Fred"
                          style={{ borderRadius: "50%" }}
                        />
                      </figure>
                    </div>

                    <div className="wrapper col-9">
                      <div className="excerpt">
                        All kudos to payscribe , I have always have nice times
                        with payscribe because of its legitimate service also
                        about the discount, you are the best
                      </div>
                      <div className="v-testimonials--footer">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="user">- Fred Anthonia</div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    // style={styles.testimonial}
                    className="testimonial d-flex flex-row justify-content-between align-items-start"
                    data-aos="zoom-out-up"
                    data-aos-delay="200"
                  >
                    <div className="testimonial-author col-3 mx-3">
                      <figure
                        className="featured-thumbnail col-12"
                        style={{
                          borderRadius: "50%",
                          border: "7px solid purple",
                        }}
                      >
                        <img
                          className="col-12"
                          src={AVATAR}
                          alt="User Review - Jeff"
                          style={{ borderRadius: "50%" }}
                        />
                      </figure>
                    </div>

                    <div className="wrapper col-9">
                      <div className="excerpt">
                        Simply the best. instant delivery of services and prompt
                        customer service.
                      </div>

                      <div className="v-testimonials--footer">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="user">
                        - Jeff <span>CEO - Tradift</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    // style={styles.testimonial}
                    className="testimonial d-flex flex-row justify-content-between align-items-start"
                    data-aos="zoom-out-up"
                    data-aos-delay="400"
                  >
                    <div className="testimonial-author col-3 mx-3">
                      <figure
                        className="featured-thumbnail col-12"
                        style={{
                          borderRadius: "50%",
                          border: "7px solid purple",
                        }}
                      >
                        <img
                          className="col-12"
                          src={AVATAR}
                          alt="User Review - Anonymous"
                          style={{ borderRadius: "50%" }}
                        />
                      </figure>
                    </div>

                    <div className="wrapper col-9">
                      <div className="excerpt">
                        It amazes me how our developers are able to integrate
                        payscribe API in few minutes, and all volume of
                        transactions was handled. Keep it up guys!
                      </div>
                      <div className="v-testimonials--footer">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>

                      <div className="user">- Anonymous</div>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
              
            </div>
          </div>
        
    );
  }
}
