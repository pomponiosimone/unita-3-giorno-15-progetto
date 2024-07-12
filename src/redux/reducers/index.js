import { combineReducers } from "redux";
import artistReducer from "./artistReducers";

const rootReducer = combineReducers({
  artist: artistReducer,
});

export default rootReducer;
