const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors({
  origin: 'https://q1-fog-assignment-frontend.vercel.app',
  methods: ["GET", "POST"],
  credentials: true
}));

const serverInfo = {
    players: "60/64",
    ping: "104ms",
    tickrate: "60 Hz",
    settings: {
        region: "Europe - DE",
        punkbuster: "ON",
        fairfight: "ON",
        password: "OFF",
        preset: "Normal"
    },
    advanced: {
        minimap: "ON",
        onlySquadLeaderSpawn: "OFF",
        vehicles: "ON",
        teamBalance: "ON",
        minimapSpotting: "ON",
        HUD: "ON",
        _3pVehicleCam: "ON",
        regenerativeHealth: "ON",
        killCam: "OFF",
        friendlyFire: "OFF",
        _3dSpotting: "ON",
        enemyNameTags: "ON"
    },
    rules: {
        tickets: 400,
        vehicleSpawnDelay: 25,
        bulletDamage: 100,
        kickAfterTeamKills: 5,
        playerHealth: 100,
        playerRespawnTime: 100,
        kickAfterIdle: 300,
        banAfterKicks: 3
    }
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/server-info', (req, res) => {
    res.json(serverInfo);
});

app.listen(port, () => {
    console.log(`Server is running`);
});
