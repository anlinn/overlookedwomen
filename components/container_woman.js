import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./header.css";
import "./container_woman.css";

const ContainerWoman = (props) => {
  return (
    <div className="homepage-container-henrietta-lacks">
      <img
        alt="henrietta_lacks"
        src="https://upload.wikimedia.org/wikipedia/en/d/d7/Henrietta_Lacks_%281920-1951%29.jpg"
        className="homepage-image06"
      />
      <div className="homepage-container4 source">
        <img
          alt="Polio_vaccine"
          src="/playground_assets/syringe-200h.png"
          className="homepage-image07"
        />
        <div className="target">
          <h1 className="homepage-text20 textXL">{this.props.name}</h1>
          <p className="homepage-text21">
            <span>
              After dying from cervical cancer in 1951, cancer cells were taken
              from here body without her prior consent. These cells were studies
              and used extensively in medical research since they were used to
              form the first immortalized human cell line known as the HeLa
              line. These cells were also later used to test the polio vaccine
              on, making it available a lot sooner thant otherwise would have
              been possible.
            </span>
            <br></br>
            <span>
              As a black lesbian in the 20s she pushed the boundaries of gender
              and sexuality.
            </span>
            <br></br>
            <span></span>
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Henrietta_Lacks"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-link3"
          >
            Learn more about her here
          </a>
        </div>
      </div>
    </div>
  );
};

//export default ContainerWoman;
