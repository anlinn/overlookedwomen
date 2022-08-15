import React, { useState, useEffect, useRef } from "react";
import "./WomanDetail.css";
//import Draggable from "react-draggable";
import Draggable from "./Draggable";
import { Ref } from "semantic-ui-react";

const WomanDetail = ({ displayedWoman, onWomanSelect }) => {
  // Remove WomanDetail from DOM on click outside of the WomanDetail-Component

  const ref = useRef();
  // Close the component on click on element outside of it
  useEffect(() => {
    const onBodyClick = (event) => {
      // Check if clicked on element (event.target) is inside the ref-div ("card info")
      if (ref.current.contains(event.target)) {
        return;
      } else {
        // if not set woman argument that passed to onWomanSelect to ""
        onWomanSelect("");
      }
    };
    // eventListener to the body
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  return (
    <div style={{ zIndex: 2000 }}>
      <Draggable>
        <div ref={ref} className={`card info ${displayedWoman.category}`}>
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
                  <span>{displayedWoman.lifespan}</span>
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
      </Draggable>
    </div>
  );

  return <div></div>;
};

export default WomanDetail;
