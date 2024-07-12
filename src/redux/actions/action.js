export const SEARCH_ARTIST = "SEARCH_ARTIST";

export const searchArtist = artistName => ({
  type: SEARCH_ARTIST,
  payload: artistName,
});
