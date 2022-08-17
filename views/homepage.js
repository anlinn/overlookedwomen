import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion/dist/es/index";
import Header from "../components/header";
import Footer2 from "../components/footer_2";
import "./homepage.scss";

import WomanDetail from "../components/WomanDetails";
import WomanList from "../components/WomanList";
import CollapsibleSidebar from "../components/CollapsibleSidebar";

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
    move: true,
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
          moveState={this.state.move}
        />

        <Header rootClassName="header-root-class-name1"></Header>
        <CollapsibleSidebar onClickSelectCategory={this.onCategorySelect} />

        {/* Conditional Rendering of WomanDetail if clicked outside */}
        {this.state.selectedWoman && this.state.categorySelected ? (
          <WomanDetail
            displayedWoman={this.state.selectedWoman}
            onWomanSelect={this.onWomanSelect}
          />
        ) : (
          <div></div>
        )}
        <button
          className={
            this.state.move
              ? "animation-trigger-button"
              : "animation-trigger-button active"
          }
          onClick={() => this.setState({ move: !this.state.move })}
        >
          {this.state.move ? "STOP ANIMATION" : "START ANIMATION"}
        </button>

        <Footer2 rootClassName="footer2-root-class-name"></Footer2>
      </div>
    );
  }
}

export default Homepage;
