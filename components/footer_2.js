import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./footer_2.css";

const Footer2 = (props) => {
  return (
    <div className={`footer_2-container ${props.rootClassName} `}>
      <div className="footer_2-container1">
        <Link to="/contact_formular">
          <span className="footer_2-link">{props.text}</span>
        </Link>
      </div>
    </div>
  );
};

Footer2.defaultProps = {
  link_text: "",
  text: "Something wrong? Someone missing? Let us know!",
  rootClassName: "",
};

Footer2.propTypes = {
  link_text: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Footer2;
