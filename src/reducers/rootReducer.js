import counter from "./counter";
import { combineReducers } from "redux";

// const initState = {
//   count: 0
// }

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
