import * as actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function removeCourse(course) {
  return { type: actionTypes.REMOVE_COURSE, course: course };
}

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(courses) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, courses };
}

export function updateCourseSuccess(courses) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, courses };
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
