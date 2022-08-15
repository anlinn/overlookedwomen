import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
//import styles from "semantic-ui-css/semantic.min.css";

import ContactFormular from "./views/contact_formular";
import Homepage from "./views/homepage";
import Gallery from './views/gallery'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={ContactFormular} path="/contact_formular" />
        <Route exact component={Homepage} path="/" />
        <Route exact component={Homepage} path="/home" />
        <Route exact component={Gallery} path="/gallery"/>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
