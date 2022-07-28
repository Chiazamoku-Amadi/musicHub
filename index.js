let song = {
  id: 1,
  name: "Song 1",
  artist: "Artist 1",
  releaseDate: "01/01/2022",
  reviewStatus: true,
  reviewScore: 10,
};

let songs = [];

function createSong(name, artist, releaseDate, reviewStatus, reviewScore) {
  let song = {
    name,
    id: songs.length + 1,
    artist,
    releaseDate,
    reviewStatus,
    reviewScore,
  };

  songs.push(song);
}

function enterDetails() {
  let songName = prompt("Enter song name", " ");
  let artistName = prompt("Enter artist name", " ");
  let date = prompt("Enter release date", " ");
  let status = prompt("Enter review status", " ");
  let score = prompt("Enter review score", " ");

  createSong();
}

function checkDetails(songName, artistName, date, status, score) {
  songName;
}
