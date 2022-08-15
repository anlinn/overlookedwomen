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


      
      <ContainerWoman
        name="Patsy Mink"
        description="She was the first asian -american woman who was elected to the
        house of representatives in 1964. Having faced racism and sexism
        growing up, she worked hard to fight segregation policies and
        later became the first one to oppose a Supreme Court nominee on
        the basis of discrimination against women. She served a total of
        12 terms (24 years), split between representing Hawaii's
        at-large congressional district and the second congressional
        district."
        category="politics"
        top="300px"
        left="450px"
        img_alt="Patsy Mink"
        img_src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Patsy_Mink_1970s.jpg"
        img_classname="homepage-image-woman"
        icon_alt="House of Representatives"
        icon_src="https://upload.wikimedia.org/wikipedia/commons/9/90/United_States_House_of_Representatives_chamber.jpg"
        icon_classname="homepage-image-icon-woman"
        icon_width="150px"
        icon_height="150px"
        icon_top="-26px"
        icon_left="-20px"
        link="https://en.wikipedia.org/wiki/Patsy_Mink"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1927-2002"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Hedy Lamarr"
        description="Hedy Lamarr was an Austrian-born actress and inventor. During
        world war II she helped invent a system for frequency hopping to
        prevent spionage from the germans. This invention was a lso the
        basis for later development of other wireless communication like
        Wi-Fi, GPS or Bluetooth."
        category="science"
        top="100px"
        left="300px"
        img_alt="Hedy Lamarr"
        img_src="/playground_assets/hedy-lamarr-g7be436287_1280-1500h.png"
        img_classname="homepage-image-woman"
        icon_alt=" GPS Invention"
        icon_src="/playground_assets/kisspng-gps-navigation-systems-global-positioning-system-g-checkpoint-5b111df1414f17.5064716415278484332675-200h.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="hedy-lamarr"
        link="https://en.wikipedia.org/wiki/Hedy_Lamarr"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1914- 2000"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Gladys Bentley"
        description="Gladys Bentley was an Renaissance blues singer and cross
        dresser. After running away at 16 to New York her
        characteristically deep voice quickly helped her to fame during
        the Halrem renaissance."
        category="human"
        top="10px"
        left="100px"
        img_alt="Gladys Bentley"
        img_src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Gladys_Bentley_2.jpg"
        img_classname="homepage-image-woman"
        icon_alt="LGBTQ+ Rights"
        icon_src="https://upload.wikimedia.org/wikipedia/commons/8/8a/LGBT_Rainbow_Flag.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="hedy-lamarr"
        link="https://de.wikipedia.org/wiki/Gladys_Bentley"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1907-1960"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Henrietta Lacks"
        description="After dying from cervical cancer in 1951, cancer cells were
        taken from here body without her prior consent. These cells were
        studies and used extensively in medical research since they were
        used to form the first immortalized human cell line known as the
        HeLa line. These cells were also later used to test the polio
        vaccine on, making it available a lot sooner thant otherwise
        would have been possible."
        category="medicine"
        top="50px"
        left="800px"
        img_alt="Henrietta Lacks"
        img_src="https://upload.wikimedia.org/wikipedia/en/d/d7/Henrietta_Lacks_%281920-1951%29.jpg"
        img_classname="homepage-image-woman"
        icon_alt="Polio Vaccine"
        icon_src="/playground_assets/syringe-200h.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="hedy-lamarr"
        link="https://en.wikipedia.org/wiki/Henrietta_Lacks"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1920-1951"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Faith Spotted Eagle"
        description="As a member of the Yanktion Sioux Nation and american activist
        Faith Spotted Eagele was involved in the attempt to blick the
        development of the dacota access pipe. Furthermore she is a
        founding member of the brave heart society, that teaches young
        girls about traditional culture and in 2016 even received a
        single electoral vote for the Presidency of the US."
        category="human"
        top="130px"
        left="600px"
        img_alt="faith-spotted-eagle"
        img_src="https://upload.wikimedia.org/wikipedia/commons/8/83/Faith_Spotted_Eagle_%28cropped%29.png"
        img_classname="homepage-image-woman"
        icon_alt="Eagle"
        icon_src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Transparent_Eagle.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="faith-spotted-eagle"
        link="https://en.wikipedia.org/wiki/Faith_Spotted_Eagle"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        categorySelected={categorySelected}
        moveState={moveState}
        lifespan="1948-"
      ></ContainerWoman>
      <ContainerWoman
        name="Eunice Foote"
        description="Despite its relevance, only few people know of Eunice Foote,
        the american scientist who in 1850 3 years before the better
        known british scientist John Tyndall, publshied the results of
        her experiments regarding an effect that later became known as
        the greenhouse effect. In her experminets she showed the ability
        of atmospheric water vapor and CO2 to affect solar heating."
        category="science"
        top="330px"
        left="900px"
        img_alt="Eunice Foote"
        img_src="/playground_assets/eunice_newton_foote-1500h.png"
        img_classname="homepage-image-woman"
        icon_alt="carbon dioxide greenhouse effect"
        icon_src="/playground_assets/co2-200h.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="eunice-foote"
        link="https://en.wikipedia.org/wiki/Eunice_Newton_Foote"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1819-1888"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Lise Meitner"
        description="It was Lise Meitner who suggested firing neutrons at uranium
        atoms, leading to the discovery of Nuclear fission. As a jewish
        woman in Germany during the Nazi-reign however she never got
        recognition for her contribution when she had to flee to Sweden,
        where she continued her work. She did not share the 1944 nobel
        prize in chemistry that was awarded to Otto Hahn for the
        discovery and only got formal recognition later in life for
        example in 1966 being accreditted the Enrico Fermi Award, 30
        years after her initial discovery."
        category="science"
        top="630px"
        left="900px"
        img_alt="Lise Meitner"
        img_src="/playground_assets/lise_meitner_%5B1878-1968%5D%2C_lecturing_at_catholic_university%2C_washington%2C_d.c.%2C_1946-200w.jpg"
        img_classname="homepage-image-woman"
        icon_alt="nuclear fission"
        icon_src="/playground_assets/nuclear_fission-200h.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="lise-meitner"
        link="https://en.wikipedia.org/wiki/Lise_Meitner"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1878-1968"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
      <ContainerWoman
        name="Paulina Luisi"
        description="Paulina Luisi is the first latin american woman to participate
        in teh League of Nations as a government representative. She is
        also the first Uruguayan woman to ever receive a medical degree.
        As part of the feminist movement she fought for women's
        right to vote and obligatory sex-health education in schools."
        category="politics"
        top="230px"
        left="400px"
        img_alt="Paulina Luisi"
        img_src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Paulina_Luisi.jpg"
        img_classname="homepage-image-woman"
        icon_alt="Woman Education League of Nations"
        icon_src="/playground_assets/co2-200h.png"
        icon_classname="homepage-image-icon-woman"
        icon_styling="lise-meitner"
        link="https://en.wikipedia.org/wiki/Paulina_Luisi"
        link_classname="homepage-link-woman"
        onWomanSelect={onWomanSelect}
        lifespan="1875-1950"
        categorySelected={categorySelected}
        moveState={moveState}
      ></ContainerWoman>
    </div>
  );
};

export default WomanList;
