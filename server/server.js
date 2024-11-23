const express = require("express")
const spotifyWebApi = require("spotify-web-api-node")

const app = express();

app.post('./login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new spotifyWebApi({
        clientId: '124ef34fb5224fdf868a397490a31774',
        clientSecret: 'a442ce8e7ca4402a82c8972f6c91b3ac',
        redirectUri: 'http://localhost:5173/'
    });

    spotifyApi.authorizationCodeGrant(code)
       .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            });
        })
       .catch(() => {
            res.sendStatus(400)
        });
})