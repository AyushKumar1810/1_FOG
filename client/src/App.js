import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from "./components/List/List";
import SideMenu from "./components/SideMenu/SideMenu";
import MapRotation from "./components/MapRotation/MapRotation";
import Sidebar from "./components/RightSideMenu/SideBar";

const mapData = [
  {
    title: "CONQUEST LARGE",
    map: "DAWNBREAKER",
    img: "images/map-rotation/map-rotation-1.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "PROPAGANDA",
    img: "images/map-rotation/map-rotation-2.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "OPERATION LOCKER",
    img: "images/map-rotation/map-rotation-3.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "LANCANG DAM",
    img: "images/map-rotation/map-rotation-4.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "SIEGE OF SHANGHAI",
    img: "images/map-rotation/map-rotation-5.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "GOLMUD RAILWAY",
    img: "images/map-rotation/map-rotation-6.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "DAWNBREAKER",
    img: "images/map-rotation/map-rotation-1.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "PROPAGANDA",
    img: "images/map-rotation/map-rotation-2.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "OPERATION LOCKER",
    img: "images/map-rotation/map-rotation-3.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "LANCANG DAM",
    img: "images/map-rotation/map-rotation-4.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "SIEGE OF SHANGHAI",
    img: "images/map-rotation/map-rotation-5.png",
  },
  {
    title: "CONQUEST LARGE",
    map: "GOLMUD RAILWAY",
    img: "images/map-rotation/map-rotation-6.png",
  },
];

function App() {
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    axios.get('https://q1-fog-assignment-backend.vercel.app/server-info')
      .then(response => {
        setServerInfo(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the server information!', error);
      });
  }, []);

  if (!serverInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="side-menu-container">
          <SideMenu />
        </div>
        <div>
          <div>
            <h1 className="heading">SERVER INFO</h1>
            <div className="server-container">
              <div className="server-title">! RC3-BASEMAPS</div>
              <div className="server-info">
                <div className="server-details">
                  <div className='server-details-heading'>CONQUEST LARGE · LANCANG DAM · CUSTOM · 60 HZ</div>
                  <div className='server-details-desc'>
                    Server protected by The, K-50 Anticheat. Vip !Rules,
                    Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
                  </div>
                  <div className="buttons">
                    <button>JOIN</button>
                    <button>SPECTATE</button>
                    <button>JOIN AS COMMANDER</button>
                    <button className="star-button">★ 13672</button>
                  </div>
                </div>
                <div className="players-info">
                  <div className="players-info-title">
                    PLAYERS
                    <div className="players-info-values">{serverInfo.players}</div>
                  </div>
                  <div className="players-info-title">
                    PING
                    <div className="players-info-values">{serverInfo.ping}</div>
                  </div>
                  <div className="players-info-title">
                    TICKRATE
                    <div className="players-info-values">{serverInfo.tickrate}</div>
                  </div>
                </div>
                <div className="server-settings">
                  <div className="settings">
                    <div>SETTINGS</div>
                    <List entries={Object.entries(serverInfo.settings)} />
                  </div>
                  <div className="advanced">
                    <div>ADVANCED</div>
                    <List entries={Object.entries(serverInfo.advanced)} />
                  </div>
                  <div className="rules">
                    <div>RULES</div>
                    <List entries={Object.entries(serverInfo.rules)} />
                  </div>
                </div>
              </div>
              <div className="map-rotation-container">
                <p className="map-rotation-heading">MAP ROTATION</p>
                <MapRotation maps={mapData} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
