import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  const menuImage1 = `${process.env.PUBLIC_URL}/images/side-menu/side-menu-1.png`;
  const menuImage2 = `${process.env.PUBLIC_URL}/images/side-menu/side-menu-2.png`;
  const menuImage4 = `${process.env.PUBLIC_URL}/images/side-menu/side-menu-4.png`;
  return (
    <div className="side-menu">
      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
        className="menu-item"
      >
        <img src={menuImage1} alt="Menu 1" />
      </a>

      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
        className="menu-item"
      >
        <img src={menuImage2} alt="Menu 2" />
      </a>

      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
        className="menu-item"
      >
        <img src={menuImage2} alt="Menu 2" />
      </a>

      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv"
        className="menu-item"
      >
        <img src={menuImage4} alt="Menu 4" />
      </a>

      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-watch"
        className="menu-item"
      >
        <img src="/images/play_arrow.png" alt="Menu 4" />
      </a>

      <a
        href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-news"
        className="menu-item"
      >
        <img src="/images/news.png" alt="Menu 4" />
      </a>
      <div className="menu-item-lower-container">
        <img
          src="/images/question_mark.png"
          alt="Menu 4"
          className="menu-item-lower"
        />
        <img
          src="/images/power_button.png"
          alt="Menu 4"
          className="menu-item-lower"
        />
      </div>
    </div>
  );
};

export default SideMenu;
