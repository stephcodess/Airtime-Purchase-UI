import { Link } from "react-router-dom";
import LandingBg from "../../assets/images/landing-page.svg";
import { AIRTIME, DASHBOARD, HOME, LOGIN, REGISTER } from "../../constants/routeNames";
import TypeAnimation from 'react-type-animation';
import { useState, useEffect } from "react";
function LandingBanner() {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());
  function getWindowDimension(){
    const {innerWidth: width, innerHeight: height} = window
    return {
      width,
      height
    };
  }
  useEffect(()=>{
    window.addEventListener('resize', setWindowDimension(getWindowDimension));
    return ()=> window.removeEventListener('resize',setWindowDimension(getWindowDimension));
  },[])
  return (
    <div className="bg" style={{ backgroundColor: "#754ffe", height: windowDimension.width > 1200 ? 600 : 450, paddingTop: 100}}>
      <div class="container">
        {/* Hero Section */}
        <div class="row justify-content-center align-items-center position-relative">
          <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="py-3 py-lg-0">
              <h1 class="text-white display-4 fw-bold">
                Welcome to Fidpress Network
              </h1>
              <p class="text-white-50 mb-5 lead">
              <TypeAnimation
                cursor={false}
                sequence={['Pay - Payment; Scribe Subscribe Payscribe. Get All your payment and Subscription done at ease.', 2000, 'Pay - Payment; Scribe Subscribe Payscribe. Get All your payment and Subscription done at ease.']}
                wrapper="p"
              />
                
              </p>
              <Link to={localStorage.getItem("authToken") ? DASHBOARD : LOGIN} className="btn btn-info" style={{ color: "#fff", width: 160, height: 50, fontSize:22,marginRight: 15 }}>
                {localStorage.getItem("authToken") ? "Dashboard" : "Login"}
              </Link>
              <Link to={localStorage.getItem("authToken") ? AIRTIME:REGISTER} className="d-none d-sm-inline-block btn btn-info text-center" style={{ color: "#fff",width: 160,fontSize:22, height: 50}}>
                {localStorage.getItem("authToken") ? "Airtime":"Register"}
              </Link>
            </div>
          </div>
          {/* text-lg-end */}
          <div class="col-xl-6 col-lg-5 text-lg-end text-center d-none d-lg-block">
            <img
              src={LandingBg}
              alt="landing"
              // class="d-none d-md-block d-lg-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBanner;
