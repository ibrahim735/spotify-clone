const express = require("express");
const cors = require("cors");
const bodyParser = require(body - parser);
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new spotifyWebApi({
    clientId: "124ef34fb5224fdf868a397490a31774",
    clientSecret: "a442ce8e7ca4402a82c8972f6c91b3ac",
    refreshToken: refreshToken,
    redirectUri: "http://localhost:5173/",
  });
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("./login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    clientId: "124ef34fb5224fdf868a397490a31774",
    clientSecret: "a442ce8e7ca4402a82c8972f6c91b3ac",
    redirectUri: "http://localhost:5173/",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.listen(3001);
