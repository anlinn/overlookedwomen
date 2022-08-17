import React, { useState, useEffect, useRef } from "react";
import "./GalleryWomanDetail.scss";
//import Draggable from "react-draggable";
import Draggable from "./Draggable";
import { Ref } from "semantic-ui-react";

const GalleryWomanDetail = ({ displayedWoman }) => {
  // Remove WomanDetail from DOM on click outside of the WomanDetail-Component

  
  // Close the component on click on element outside of it
  
  return (
    <div >
        <div className={`card info ${displayedWoman.category} `} id={`${displayedWoman.name.toLowerCase().replaceAll(" ","-")}`}>
          <div className="row">
            <div className="column">
              <div className="image">
                <img className="card-image" src={displayedWoman.img_src} />
              </div>
            </div>
            <div className="column">
              <div className="content">
                <a className="header">{displayedWoman.name}</a>
                <div className="meta">
                  {displayedWoman.lifespan}
                </div>
                <div className="description">
                  <p>{displayedWoman.description}</p>
                </div>
                <div className="link-box">
                  <a className="link" href={displayedWoman.link}>
                    Learn more about her !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );

  
};

export default GalleryWomanDetail;
