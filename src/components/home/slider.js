import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
        style={{ ...style, display: "block", background: "green", fontWeight: "bolder", }}
        onClick={onClick}
      />
      
    );
  }
  
export default class SimpleSlider extends Component {
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
              className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
               className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
               className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
               className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
               className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-out-down" data-aos-delay="0" className="col-4">
            <img
               className="m-auto"
              src="https://res.cloudinary.com/philo001/image/upload/payscribe/blog//wblsijb82aqdrigwz3qh.webp"
              alt="image"
            />
            <div>
              <h1>how to eat banana</h1>
              <p>banana is good</p>
              <Link to={"/"}>
                good banana<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
