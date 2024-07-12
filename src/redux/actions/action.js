export const SEARCH_ARTIST = "SEARCH_ARTIST";

export const searchArtist = artistName => ({
  type: SEARCH_ARTIST,
  payload: artistName,
});
export const setMusic = (genre, data) => ({
  type: "SET_MUSIC",
  genre,
  payload: data,
});
export const setCurrentSong = song => ({
  type: "SET_CURRENT_SONG",
  payload: song,
});

export const toggleLikeSong = songId => ({
  type: "TOGGLE_LIKE_SONG",
  payload: songId,
});
