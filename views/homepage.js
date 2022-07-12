import React from "react";
import axios from "axios";
import Collapsible from "react-collapsible";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer2 from "../components/footer_2";
import "./homepage.css";
import ContainerWoman from "../components/containerWoman";
import WomanDetail from "../components/WomanDetails";
import WomanList from "../components/WomanList";
import { Radio } from "semantic-ui-react";
import PrimaryButton from "../components/primary-button";

class Homepage extends React.Component {
  state = {
    selectedWoman: "",
    categorySelected: [
      { category: "science", isSelected: true },
      { category: "medicine", isSelected: true },
      { category: "human", isSelected: true },
      { category: "politics", isSelected: true },
      { category: "other", isSelected: true },
    ],
  };
  // Tester for getting appropiate wikipedia link
  search = async (woman) => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: woman.name,
      },
    });
    console.log(data);
  };
  onWomanSelect = (woman) => {
    this.setState({ selectedWoman: woman });
    this.search(woman);
  };
  // Update the appropiate entry in the Category-State on button press
  onCategorySelect = (index) => {
    let currentState = this.state.categorySelected;
    currentState[index].isSelected = !currentState[index].isSelected;

    this.setState(currentState);
  };
  /*componentDidMount() {
    const script = document.createElement("script");
    script.src = "../components/animation.js";
    document.body.appendChild(script);
  }*/

  render() {
    // Only render the womandetail-component if the user has clicked on a woman
    /*let womandetail;
    if (this.state.selectedWoman) {
      womandetail = (
        <WomanDetail
          displayedWoman={this.state.selectedWoman}
          onWomanSelect={this.onWomanSelect}
        />
      );
    } else {
      womandetail = <div></div>;
    }*/

    return (
      <div className="homepage-container">
        <Helmet>
          <title>OverlookedWomen</title>
          <meta property="og:title" content="OverlookedWomen" />
          <script src="../components/animation.js" type="text/javascript" />
        </Helmet>

        <WomanList
          onWomanSelect={this.onWomanSelect}
          categorySelected={this.state.categorySelected}
        />
        <Header rootClassName="header-root-class-name1"></Header>
        <Collapsible
          trigger="Select search categories"
          className="collapsible-component"
        >
          <div>
            <form>
              <label htmlFor="science-checkbox">Science</label>
              <input
                type="checkbox"
                id="science-checkbox"
                name="science-checkbox"
                onClick={() => this.onCategorySelect(0)}
                //label="Science"
                defaultChecked="true"
                className="checkbox science"
              />

              <label htmlFor="medicine-checkbox">Medicine</label>
              <input
                type="checkbox"
                id="medicine-checkbox"
                name="medicine-checkbox"
                onClick={() => this.onCategorySelect(1)}
                defaultChecked="true"
              />

              <label htmlFor="human-checkbox">Human Rights</label>
              <input
                type="checkbox"
                id="human-checkbox"
                name="human-checkbox"
                onClick={() => this.onCategorySelect(2)}
                defaultChecked="true"
              />

              <label htmlFor="politics-checkbox">Politics</label>
              <input
                type="checkbox"
                id="politics-checkbox"
                name="politics-checkbox"
                onClick={() => this.onCategorySelect(3)}
                defaultChecked="true"
              />

              <label htmlFor="other-checkbox">Other</label>
              <input
                type="checkbox"
                id="other-checkbox"
                name="other-checkbox"
                onClick={() => this.onCategorySelect(4)}
                defaultChecked="true"
              />
            </form>
          </div>
        </Collapsible>
        {/* Conditional Rendering of WomanDetail if cliked outside */}

        {this.state.selectedWoman && this.state.categorySelected ? (
          <WomanDetail
            displayedWoman={this.state.selectedWoman}
            onWomanSelect={this.onWomanSelect}
          />
        ) : (
          <div></div>
        )}
        <div className="circle"></div>
        <Footer2 rootClassName="footer2-root-class-name"></Footer2>
      </div>
    );
  }
}

export default Homepage;
