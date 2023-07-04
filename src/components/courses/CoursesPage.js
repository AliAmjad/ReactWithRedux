import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // step 1
    //debugger;

    // here we are dispatching the action
    this.props.actions.createCourse(this.state.course);
  };

  handleRemoveCourse = (event, course) => {
    event.preventDefault();
    this.props.actions.removeCourse(course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        <div>
          {this.props.courses.map((course) => (
            <div key={course.title}>
              <div>{course.title}</div>
              <div>
                <input
                  type="button"
                  value="Remove"
                  onClick={() => this.handleRemoveCourse(event, course)}
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// this will be invoked by the reducer to update the state and then render will be invoked
function mapStateToProps(state) {
  // step 3
  // debugger;

  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
