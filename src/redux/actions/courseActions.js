import * as actionTypes from "./actionTypes";

export function createCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course: course };
}

export function removeCourse(course) {
  return { type: actionTypes.REMOVE_COURSE, course: course };
}
