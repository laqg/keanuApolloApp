import { combineReducers } from "redux";
import keanuReducer from "./keanuReducer";

const rootReducer = combineReducers({
  keanu: keanuReducer,
});

export default rootReducer;
