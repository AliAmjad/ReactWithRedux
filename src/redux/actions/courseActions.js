import * as actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course: course };
}

export function removeCourse(course) {
  return { type: actionTypes.REMOVE_COURSE, course: course };
}

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        // dispatching the success action
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
