const playlist = {
  songs: [],

  addSong(title, artists, url) {
    const newSong = {
      title,
      artists,
      url,
      playCount: 0,
    };
    this.songs.push(newSong);
    return newSong;
  },

  getSongs() {
    return this.songs;
  },

  playSong(id) {
    if (id >= 0 && id < this.songs.length) {
      this.songs[id].playCount += 1;
      return this.songs[id];
    } else {
      return null;
    }
  },

  getpopulerSongs() {
    return this.songs.sort((a, b) => b.playCount - a.playCount);
  },
};

module.exports = playlist;
