import "./index.css";
import LOGO from "../../assets/images/fidpressLogo.png";
import { useState } from "react";
import useDocumentScrollThrottled from "./scroll";
import Button from "../customButton/button";
import { Link } from "react-router-dom";
function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  //The minimum scroll height
  const MINIMUM_SCROLL = 600;

  /**
   * @see ./scroll
   */
  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isScrolledup = previousScrollTop > currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL - 300;
    //execute for the time set
    setShouldHideHeader((isScrolledDown || isScrolledup) && isMinimumScrolled);
  });
  // update the header class list.
  const hiddenStyle = shouldHideHeader ? "" : "hidden";
  return (
    <nav
      className={`header-container navbar fixed-top navbar-expand-lg navbar-light bg-white`}
    >
      <div className="container">
        <Link to={"/"} style={{height: 70, overflow:"hidden",}}>
          <img src={LOGO} alt="Logo" width={"150px"} height={100} style={{marginLeft: -40, marginTop: -10}} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
