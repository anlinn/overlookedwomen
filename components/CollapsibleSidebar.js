import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./CollapsibleSidebar.css";
import { SidebarData } from "./SidebarData";

const CollapsibleSidebar = ({ onClickSelectCategory }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="page">
        <IconContext.Provider value={{ color: "white" }}>
          <div className={sidebar ? "sidebar active" : "sidebar"}></div>
          <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
            <div>
              <IoIosArrowDropleftCircle
                onClick={showSidebar}
                className="sidebar-open-icon"
              />
            </div>
            <ul className="sidebar-menu-items">
              {/*<li className="sidebar-toggle" onClick={showSidebar}>
              <span>
                <AiOutlineClose />
              </span>
  </li>*/}
              <form>
                {SidebarData.map((category, index) => {
                  return (
                    <div className="sidebar-text">
                      <label htmlFor={category.name}>
      
                      
                      <input
                        type="checkbox"
                        id={category.id}
                        name={category.name}
                        onClick={() => onClickSelectCategory(index)}
                        defaultChecked="true"
                      />
                    <span>{category.label}</span>
                      </label>
                    </div>
                  );
                })}
              </form>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
