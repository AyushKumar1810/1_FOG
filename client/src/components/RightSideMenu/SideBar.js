import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="squad">
        <div className="squad-icon">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" />
          <p>Squad</p>
        </div>
        <div className="squad-button">
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
            alt="Squad Avatar"
          />
          <p>Squad_Join</p>
        </div>
      </div>
      <img src="image1.jpg" alt="Description of image 1" />
      <div className="status-online">
        <div className="online-status-icon">
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
            alt="Online Avatar"
          />
          <p>Online</p>
        </div>
        <div className="online-status-button">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png" />
          <div className="online-username-container">
            <p>MaryJane</p>
            {/* <p>Online</p> */}
          </div>
        </div>
      </div>
      <img src="image2.jpg" alt="Description of image 2" />
      <div className="status-offline">
        <div className="offline-status-icon">
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg" />
          <p>Offline</p>
        </div>
        <div className="offline-status-button">
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
            alt="Offline Avatar"
          />
          <div className="offline-username-container">
          <p >420</p>
          </div>
        </div>
        
      </div>
      <img src="image3.jpg" alt="Description of image 3" />
    </div>
  );
};

export default Sidebar;
