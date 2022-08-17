import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import "./header.css";
import "./container_woman.css";

const ContainerWoman = (props) => {
  
  let {
    img_alt,
    img_src,
    icon_alt,
    icon_src,
    description,
    link,
    name,
    category,
    onWomanSelect,
    lifespan,
    categorySelected,
    moveState,
  } = props;
  const properties = props;

 

  // Make API -request for some meta-data

  // Get the correct index of the category the woman is in to check for
  const getCategoryIndex = ({ category }) => {
    if (category == "science") {
      return 0;
    }
    if (category == "medicine") {
      return 1;
    }
    if (category == "human") {
      return 2;
    }
    if (category == "politics") {
      return 3;
    } else {
      return 4;
    }
  };

  if (categorySelected[getCategoryIndex({ category })].isSelected) {
    const [x, setX] = useState(Math.floor(Math.random() * window.innerWidth));

    const [y, setY] = useState(Math.floor(Math.random() * window.innerHeight));
    
    return (
      <motion.div
        animate={{
          x: moveState ? x : null,
          y: moveState ? y : null,
        }}
        transition={{
          ease: "linear",
          type: "tween",

          duration: Math.floor(Math.random() * 5 + 2),
        }}
        onAnimationComplete={() => {
          //console.log(y, window.innerHeight);
          // Set the new x and y coordinate to random number depending on screen width
          setX(
            Math.floor(
              Math.random() * window.innerWidth - window.innerWidth / 2 //document.getElementById("container".offsetWidth)
            )
          );
          setY(
            Math.floor(
              Math.random() * window.innerHeight - window.innerHeight / 2
              //document.getElementById("container".offsetHeight)
            )
          );
        }}
      >
        <div
          className={`homepage-container-woman ${name.toLowerCase()}`}
        
          onClick={() => onWomanSelect(properties)}
        >
          <img alt={img_alt} src={img_src} className={`homepage-image-woman ${name.toLowerCase()}`} />
          {/*Adding multiple classes over js join*/}
          <div
            className={[
              "homepage-container-woman-inner",
              "source",
              `${category}`,
            ].join(" ")}
          >
            <img
              alt={icon_alt}
              src={icon_src}
              className={`homepage-image-icon-woman source ${name.toLowerCase()}`}
            />
            <div className="target">
              <h1 className="homepage-text-woman-header textXL">{name}</h1>
              <p className="homepage-text-woman-description">
                <span>{description}</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
};

ContainerWoman.defaultProps = {
  img_alt: "woman_image",
  img_classname: "homepage-image-woman",
  icon_classname: "homepage-image-icon-woman",
};

export default ContainerWoman;
