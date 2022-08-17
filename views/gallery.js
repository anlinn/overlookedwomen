import React,{useEffect} from "react";
import "./gallery.scss"
import { Helmet } from "react-helmet";

import GalleryWomanDetail from "../components/GalleryWomanDetail";
import { womanData } from "../components/woman-data";

//import Header from "./header";
import Header from "../components/header";

const data=["jim","mary","lilliputh"]
const Gallery =()=>{
    const womanListed =womanData.map((woman,i)=>{
        return(
            <div className="card">
           <GalleryWomanDetail displayedWoman={woman} key={i}/>
           </div>
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


