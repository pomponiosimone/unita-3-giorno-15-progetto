const initialState = {
  music: {
    rock: [],
    pop: [],
    hiphop: [],
    search: [],
  },
  currentSong: null,
  likedSongs: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MUSIC":
      return {
        ...state,
        music: {
          ...state.music,
          [action.genre]: action.payload,
        },
      };
    case "SET_CURRENT_SONG":
      return { ...state, currentSong: action.payload };
    case "TOGGLE_LIKE_SONG":
      const { payload: songId } = action;
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [songId]: !state.likedSongs[songId],
        },
      };
    default:
      return state;
  }
};

export default artistReducer;
