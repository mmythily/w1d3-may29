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
            },
    printPlaylists : function () {
        console.log('   <-------PLAYLISTS------->');
        for (var playlist in this.playlists) {
            var playlistName = this.playlists[playlist].name;
            var numTracks = this.playlists[playlist].tracks.length;
            console.log(`${playlist}: ${playlistName} - ${numTracks} tracks`);
        }
    },
    printTracks : function () {
        console.log('   <--------TRACKS--------->');
        for (var track in this.tracks) {
            var trackID = this.tracks[track].id;
            var trackName = this.tracks[track].name;
            var trackArtist = this.tracks[track].artist;
            var trackAlbum = this.tracks[track].album;
            console.log(`${trackID}: ${trackName} by ${trackArtist} (${trackAlbum})`);
        }
    },
    printPlaylist : function (playlistId) {
        console.log('   <----TRACKS for a PLAYLIST---->')
        var playlistName = this.playlists[playlistId].name;
        var numTracks = this.playlists[playlistId].tracks.length;
        console.log(`${playlistId}: ${playlistName} - ${numTracks} tracks`);
        var tracks = this.playlists[playlistId].tracks;
        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            var trackName = this.tracks[track].name;
            var trackArtist = this.tracks[track].artist;
            var trackAlbum = this.tracks[track].album;
            console.log(`${track}: ${trackName} by ${trackArtist} (${trackAlbum})`);
        }
    },
    addTrackToPlaylist : function (trackId, playlistId) {
        console.log('   <----ADDING TRACK TO PLAYLIST---->')
        this.playlists[playlistId].tracks.push(trackId)
    },
    addTrack : function (name, artist, album) {
        var id = `t${uid()}`;
        this.tracks[id] = {};
        this.tracks[id].id = id;
        this.tracks[id].name = name;
        this.tracks[id].artist = artist;
        this.tracks[id].album = album;
    },
    addPlaylist : function (name) {
        var id = `p${uid()}`;
        this.playlists[id] = {};
        this.playlists[id].id = id;
        this.playlists[id].name = name;
        this.playlists[id].tracks = [];
    }
}


var uid = function() {
    return Math.floor((1 + Math.random()) * 0x100).toString(16).substring(1);
}

library.printPlaylists();
library.printTracks();

library.printPlaylist('p01');
library.printPlaylist('p02');

library.addTrackToPlaylist('t03','p01');

library.addTrack('Feels like Summer', 'Childish Gambino', 'Summer Pack');
library.addTrack('Bohemian Rhapsody', 'Queen', 'A Night at the Opera');

library.addPlaylist('Chill Music');

console.log(library.playlists, library.tracks)

