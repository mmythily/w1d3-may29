var library = {
    tracks: { t01: { id: "t01",
                    name: "Code Monkey",
                    artist: "Jonathan Coulton",
                    album: "Thing a Week Three" },
            t02: { id: "t02",
                    name: "Model View Controller",
                    artist: "James Dempsey",
                    album: "WWDC 2003"},
            t03: { id: "t03",
                    name: "Four Thirty-Three",
                    artist: "John Cage",
                    album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                    },
                p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                    }
            }
}

  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

var printPlaylists = function () {
    console.log('   <-------PLAYLISTS------->');

    for (var playlist in library.playlists) {
        var playlistName = library.playlists[playlist].name;
        var numTracks = library.playlists[playlist].tracks.length;

        console.log(`${playlist}: ${playlistName} - ${numTracks} tracks`);
    }
}
printPlaylists();


  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
    console.log('   <--------TRACKS--------->');

    for (var track in library.tracks) {
        var trackID = library.tracks[track].id;
        var trackName = library.tracks[track].name;
        var trackArtist = library.tracks[track].artist;
        var trackAlbum = library.tracks[track].album;
        console.log(`${trackID}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
}
printTracks();


  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
    console.log('   <----TRACKS for a PLAYLIST---->')
    
    var playlistName = library.playlists[playlistId].name;
    var numTracks = library.playlists[playlistId].tracks.length;
    
    console.log(`${playlistId}: ${playlistName} - ${numTracks} tracks`);

    var tracks = library.playlists[playlistId].tracks;
    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        var trackName = library.tracks[track].name;
        var trackArtist = library.tracks[track].artist;
        var trackAlbum = library.tracks[track].album;
        console.log(`${track}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
}
printPlaylist('p01');
printPlaylist('p02');


  // adds an existing track to an existing playlist
  // ex: add 't03' to 'p01'
var addTrackToPlaylist = function (trackId, playlistId) {
    console.log('   <----ADDING TRACK TO PLAYLIST---->')
    library.playlists[playlistId].tracks.push(trackId)
}
addTrackToPlaylist('t03','p01');
console.log(library.playlists.p01.tracks);


  // generates a unique id
  // (use this for addTrack and addPlaylist)

var uid = function() {
    return Math.floor((1 + Math.random()) * 0x100).toString(16).substring(1);
}
console.log(`t${uid()}`);


  // adds a track to the library
var addTrack = function (name, artist, album) {
    var id = `t${uid()}`;

    library.tracks[id] = {};
    library.tracks[id].id = id;
    library.tracks[id].name = name;
    library.tracks[id].artist = artist;
    library.tracks[id].album = album;
}
addTrack('Feels like Summer', 'Childish Gambino', 'Summer Pack')
addTrack('Bohemian Rhapsody', 'Queen', 'A Night at the Opera')
console.log(library.tracks);

  // adds a playlist to the library
var addPlaylist = function (name) {
    var id = `p${uid()}`;

    library.playlists[id] = {};
    library.playlists[id].id = id;
    library.playlists[id].name = name;
    library.playlists[id].tracks = [];
}
addPlaylist('Chill Music');
console.log(library.playlists)


  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}