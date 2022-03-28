import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FUNDWALLET } from "../../constants/routeNames";
import LOGO from "../../assets/images/fidpressLogo.png";
import "./index.css";
function SidebarComponent(props) {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          // show navbar
          nav.classList.toggle("show");
          // change icon
          toggle.classList.toggle("bx-x");
          // add padding to body
          bodypd.classList.toggle("body-pd");
          // add padding to header
          headerpd.classList.toggle("body-pd");
        });
      }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Your code to run since DOM is loaded and ready
  });

  const singOut = () => {
    setLogout(true);
    setTimeout(() => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      window.location.href = "/login";
    }, 4000);
  };
  return (
    <div id="body-pd" style={{height: "100vh"}}>
      <header
        className="header d-flex flex-row justify-content-start"
        id="header"
      >
        <Link to={"/"}>
          <img src={LOGO} alt="" width={130} height={100} />
        </Link>
        <div className="header_toggle mx-5">
          <i
            style={{ fontSize: 45, color: "#000", cursor: "pointer" }}
            className="bi bi-filter-left"
            id="header-toggle"
          ></i>
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to={"/"} className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <h3 style={{ fontSize: 35, color: "#fff" }}></h3>
            </Link>
            <div className="nav_list">
              <Link to="/dashboard" className="nav_link active">
                <i className="bi bi-user"></i>
                <span className="nav_name">Dashboard</span>
              </Link>
              <Link to={FUNDWALLET} className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">Fund Wallet</span>
              </Link>
              <Link to={"/"} className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">Purchase Airtime</span>
              </Link>
              <Link to={"/"} className="nav_link">
                <i className="bx bx-bookmark nav_icon"></i>
                <span className="nav_name">Data Subscription</span>
              </Link>
              <Link to={"/"} className="nav_link">
                <i className="bx bx-folder nav_icon"></i>
                <span className="nav_name">Files</span>
              </Link>
              <Link to={"/"} className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">Stats</span>
              </Link>
            </div>
          </div>
          <Link to={"#"} className="nav_link" onClick={() => singOut()}>
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
      <div className="bg-light" style={{height: "100%"}}>
        {logout ? (
          <div
            className="vw-100 vh-100 p-absolute top-0 d-flex flex-column align-items-center justify-content-center"
            style={{ color: "#000" }}
          >
            <div class="spinner-border" role="status"></div>
            <span>
              Login Out{" "}
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </span>
          </div>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
}

export default SidebarComponent;
