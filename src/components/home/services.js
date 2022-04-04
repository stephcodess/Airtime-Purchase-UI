import React from "react";
import Airtime from "../../assets/images/undraw_phone_call_re_hx6a.svg";
import Data from "../../assets/images/data.svg";
import Electricity from "../../assets/images/electricity.svg";
import Button from "../customButton/button";
import Delivery from "../../assets/images/Delivery.svg";
const HomeServices = () => {
  return (
    <div className="bg-white" data-aos="zoom-in">
      <div className="container m-auto my-4">
        <div className="col-12 text-center">
          <h2 className="">Our Services</h2>
          <p></p>
        </div>
        <div className="bg-height single-service row col-12 pt-5">
          <img
            src={Airtime}
            alt=""
            className="d-lg-none col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          />
          <div className="col-12 col-lg-6">
            <h4 className="mb-4">Vend Airtime</h4>
            <p className="service-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
          <div
            className="d-none d-lg-flex justify-content-center col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={Airtime} alt="" className="d-none d-lg-block col-lg-6" />
          </div>
        </div>
        <div className="bg-height single-service row col-12 pt-5">
          <img
            src={Data}
            alt=""
            className="col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          />
          <div className="col-12 col-lg-6">
            <h4 className="mb-4">Data Subscription</h4>
            <p className="service-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
        </div>
        <div className="bg-height single-service row col-12 pt-5">
          <img
            src={Electricity}
            alt=""
            className="d-lg-none col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          />
          <div className="col-12 col-lg-6">
            <h4 className="mb-4">Purchase Electricity</h4>
            <p className="service-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
          <img
            src={Electricity}
            alt=""
            className="d-none d-lg-block col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          />
        </div>
        <div className="bg-height single-service row col-12 pt-5">
          <img
            src={Delivery}
            alt=""
            className="col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          />
          <div className="col-12 col-lg-6">
            <h4 className="mb-4">Fidpress Delivery</h4>
            <p className="service-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
        </div>
        <Button title="Sign Up To Explore" height={50} mt={40} />
      </div>
    </div>
  );
};

export default HomeServices;
