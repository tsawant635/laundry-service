import React from "react";
import "./sidebar.css";



const Sidebar = () => {
  return (
    <>
      <div>
        <div className="side-bar">
          <img src='./images/home-run.svg' alt="no-icon" id="home-run"></img>
          <img src='./images/more.svg' alt="no-icon" id="more"></img>
          <div className="list">
            <img src='./images/list.svg' alt="no-icon" id="list"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;