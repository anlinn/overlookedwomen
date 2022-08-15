import React from "react";
import "./gallery.scss"
import { Helmet } from "react-helmet";
import ContainerWoman from "../components/containerWoman";
import WomanDetail from "../components/WomanDetails";
import WomanList from "../components/WomanList";
import { womanData } from "../components/woman-data";

//import Header from "./header";
import Header from "../components/header";

const data=["jim","mary","lilliputh"]
const Gallery =()=>{
    const womanListed=womanData.map((woman)=>{
        return(
            <WomanDetail displayedWoman={woman} onWomanSelect={(f)=>f}/>
        )
    })
    return(
        <div className="gallery-page-container">
        <Helmet>
          <title>OverlookedWomen</title>
          <meta property="og:title" content="OverlookedWomen" />
          <script src="../components/animation.js" type="text/javascript" />
        </Helmet>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="women-list">
           {womanListed}
        </div>
        </div>
    )
}
export default Gallery;
