import { Link } from "react-router-dom";
import FooterSlider from "./footerSlider";

function FooterComponent() {
  return (
    <>
     {/* Another section */}
     <div className="container-fluid vw-100 p-absolute" style={{backgroundColor: "rgba(0,0,0,0.1)"}}>
       
        <div class="container row m-auto">
        
          <div class="col-sm-7" style={{height: 300,overflow:"hidden", paddingTop: 100}}>
          <FooterSlider />
          </div>
          <div class="col-sm-5 d-flex flex-column justify-content-center">
            <h2>Solutions Powered By Telcos</h2>
            <p class="v-lead">
              Bringing all lifestyle bills hassle into one single solution -
              Fidpress.ng
            </p>
          </div>
        </div>
      </div>
    <div
      className="container-fluid vw-100"
      // id="footer"
      style={{ backgroundColor: "#3abee7"}}
    >
      <div className="copyright">
        <div className="container d-flex flex-row justify-content-between align-items-center" style={{ height: 80 }}>
          <p>
            © Copyright 2022 - Fidpress. All Rights Reserved.
          </p>

          <nav className="footer-menu col-6">
            <ul className="row justify-content-between">
              <li>
                <Link to={'/'} className="text-dark">
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-dark">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-dark">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-dark">
                  Terms
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-dark">
                  Developers (API)
                </Link>
              </li>
              <li>
                <Link to={'/'} className="text-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
  );
}

export default FooterComponent;
