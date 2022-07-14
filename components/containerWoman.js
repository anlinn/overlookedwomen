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
    img_classname,
    icon_alt,
    icon_src,
    icon_classname,
    description,
    link,
    name,
    link_classname,
    category,
    top,
    left,
    icon_width,
    icon_height,
    icon_top,
    icon_left,
    icon_styling,
    onWomanSelect,
    lifespan,
    categorySelected,
    moveState,
  } = props;

  const [x, setX] = useState(0);
  const [y, setY] = useState(30);
  const [speedX, setSpeedX] = useState(10);
  const [speedY, setSpeedY] = useState(10);

  const myStyling = {
    top: `${top}`,
    left: `${left}`,
  };

  const myIconStyling = {
    width: `${icon_width}`,
    height: `${icon_height}`,
    top: `${icon_top}`,
    left: `${icon_left}`,
  };
  // Helper Function to determine the class of the woman
  const getIconClassname = (icon_styling) => {
    if (icon_styling === undefined) {
      return "homepage-image-icon-woman";
    } else {
      return "homepage-image-icon-woman hedy-lamarr";
    }
  };

  const iconClassname = getIconClassname(icon_styling);

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

  const getNextPosition = () => {
    console.log(Math.floor(Math.random() * 500));
    return [Math.floor(Math.random() * 700), Math.floor(Math.random() * 500)];
  };

  useEffect(() => {
    const nextPosition = getNextPosition();
    setX(nextPosition[0]);
    setY(nextPosition[1]);
    console.log(nextPosition);
    setX(nextPosition[0]);
    setY(nextPosition[1]);
  }, []);

  if (categorySelected[getCategoryIndex({ category })].isSelected) {
    return (
      <motion.div
        animate={{
          x: moveState ? [x, 0, x] : null,
          y: moveState ? [0, y, 0] : null,
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        /*onAnimationComplete={() => {
          console.log(y, window.innerHeight);
          setX(x + speedX);
          setY(y + speedY);
          if (x >= 0) {
            setSpeedX(-10);
          }
          if (x <= -window.innerWidth + SVG_WIDTH) {
            setSpeedX(10);
          }

          if (y >= window.innerHeight / 2) {
            setSpeedY(-10);
          }

          if (y <= -window.innerHeight / 2) {
            setSpeedY(10);
          }
        }}*/
      >
        <div
          className="homepage-container-woman"
          style={myStyling}
          onClick={() => onWomanSelect(this.props)}
        >
          <img alt={img_alt} src={img_src} className={img_classname} />
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
              className={`${iconClassname}`}
              style={myIconStyling}
            />
            <div className="target">
              <h1 className="homepage-text-woman-header textXL">{name}</h1>
              <p className="homepage-text-woman-description">
                <span>{description}</span>
              </p>
              {/*<a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className={link_classname}
            >
              Learn more about her here!
        </a> */}
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
