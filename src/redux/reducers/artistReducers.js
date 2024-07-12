const initialState = {
  artistName: "",
  music: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTIST_NAME":
      return { ...state, artistName: action.payload };
    case "SET_MUSIC":
      return {
        ...state,
        music: { ...state.music, [action.genre]: action.payload },
      };
    default:
      return state;
  }
};

export default artistReducer;
