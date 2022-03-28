import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "./slider";



function HomeBlogComponent() {

  return (
    <div className="container col-sm-12 my-5">
      
      <div className="text-center">
        <h4 className="my-5">From The Blog</h4>
        
          <SimpleSlider />
    
        <div className="my-5">
          <Link style={{ fontSize: 25 }} to={"/"}>
            Explore Our Blog <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogComponent;
