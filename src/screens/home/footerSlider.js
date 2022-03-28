import React, { Component } from "react";
import Slider from "react-slick";
import MTNIMG from "../../assets/images/partners/mtn.png";
import GLOIMG from "../../assets/images/partners/glo.png";
import AIRTELIMG from "../../assets/images/partners/airtel.png";
import DSTVIMG from "../../assets/images/partners/dstv.png";
import GOTVIMG from "../../assets/images/partners/gotv.png";
import MOBILEIMG from "../../assets/images/partners/9mobile.png";
export default class FooterSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div class="owl-item" style={{ width: 164}}>
            <div class="item">
              <figure>
                <a href="https://www.mtnonline.com">
                  <img
                    width={160}
                    height={100}
                    alt="Fidpress partner with MTN Nigeria"
                    src={MTNIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="owl-item mx-5" style={{ width: 164 }}>
            <div class="item">
              <figure>
                <a href="https://www.gloworld.com/ng/">
                  <img
                    width={160}
                    height={100}
                    alt="Fidpress partner with Glo world"
                    src={GLOIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="owl-item mx-5" style={{ width: 164 }}>
            <div class="item">
              <figure>
                <a href="https://9mobile.com.ng/">
                  <img
                    width={160}
                    height={100}
                    alt="Fidpress in partnership with 9mobile"
                    src={MOBILEIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="owl-item mx-5" style={{ width: 164 }}>
            <div class="item">
              <figure>
                <a href="https://airtel.com.ng/">
                  <img
                    width={160}
                    height={100}
                    alt="Buying Airtal Data plan in Nigeria"
                    src={AIRTELIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="owl-item mx-5" style={{ width: 164 }}>
            <div class="item">
              <figure>
                <a href="http://www.dstv.com/">
                  <img
                    width={160}
                    height={100}
                    alt="Subscribe DSTV using Fidpress"
                    src={DSTVIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
          <div class="owl-item mx-5" style={{ width: 164 }}>
            <div class="item">
              <figure>
                <a href="http://eazy.gotvafrica.com/en/ng/">
                  <img
                    width={160}
                    height={100}
                    alt="GOTV Africa subscription using Fidpress "
                    src={GOTVIMG}
                  />
                </a>
              </figure>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
