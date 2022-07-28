// let songs = [
//   {
//     id: 1,
//     name: "Song 1",
//     artist: "Artist 1",
//     releaseDate: "01/01/2022",
//     reviewStatus: true,
//     reviewScore: 10,
//   },
// ];

// let id = songs.length;

function CreateSong() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  let songs = [];
  songs.length = 0;

  for (var i = 0; i <= songs.length; i++) {
    songs.push({
      id: songs.length + 1,
      name: "Song" + songs.length + 1,
      artist: "Artist" + songs.length + 1,
      releaseDate: today,
      reviewStatus: hasBeenReviewed(),
      //   reviewScore: reviewScore,
    });
    songs.length += 1;

    // if (songs.length === 5) break;
  }

  console.log(songs);
  //   {
  //     id: 1,
  //     name: "Song 1",
  //     artist: "Artist 1",
  //     releaseDate: "01/01/2022",
  //     reviewStatus: true,
  //     reviewScore: 10,
  //   }
}

CreateSong();

function hasBeenReviewed() {
  this.name ? true : false;
}
