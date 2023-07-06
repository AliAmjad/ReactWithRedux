import { combineReducers } from "redux";
import courses from "../reducers/courseReducer";
import authors from "../reducers/authorReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
