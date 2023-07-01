import { combineReducers } from "redux";
import courses from "../reducers/courseReducer";

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
