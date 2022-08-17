import React from "react";
import ContainerWoman from "./containerWoman";
import { motion } from "framer-motion";
import { womanData } from "./woman-data";
//import "./homepage.css";


const WomanList = ({ onWomanSelect, categorySelected, moveState }) => {
  // move state from homepage.js
  let move = moveState;
  
  return (
    <div>
      
        {womanData.map((woman,i)=>{
          return(
          <ContainerWoman name={woman.name} description={woman.description} category={woman.category} top={woman.top} left={woman.left} img_alt={woman.img_alt}
          img_src={woman.img_src}
          img_classname={woman.img_classname} 
          icon_alt={woman.icon_alt}
          icon_src={woman.icon_src}
          icon_classname={woman.icon_classname}
          icon_width={woman.icon_width}
          icon_height={woman.icon_height}
          
          
          link={woman.link}
          link_classname={woman.link_classname}
          onWomanSelect={onWomanSelect}
          lifespan={woman.lifespan}
          categorySelected={categorySelected}
          moveState={moveState}
          key={i}/>)
        })}  
    </div>
  );
};

export default WomanList;
