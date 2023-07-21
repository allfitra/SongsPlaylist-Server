const express = require("express");
const playlist = require("./models/playlist");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Welcome to my playlist");
});

app.post("/addsong", (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    return res.status(400).json({ error: "Please fill in the title, artist and URL" });
  }

  const newSong = playlist.addSong(title, artists, url);
  res.status(201).json({ message: "added song to playlist", song: newSong });
});

app.get("/playlist", (req, res) => {
  res.json(playlist.getSongs());
});

app.post("/play/:id", (req, res) => {
  const songId = req.params.songId;
  const song = playlist.playSong(songId);

  if (!song) {
    return res.status(400).json({ error: "Song not found." });
  }

  res.json({ message: `Playing "${song.title}" by ${song.artists}` });
});

app.get("/playlist/populer", (req, res) => {
  res.json(playlist.getpopulerSongs());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
