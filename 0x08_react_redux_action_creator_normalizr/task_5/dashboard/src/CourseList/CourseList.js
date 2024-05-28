import React from 'react';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet } from 'aphrodite';

const CourseList = ({listCourses}) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        )}
        {listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  CourseList: {
    width: '90%',
    borderCollapse: 'collapse',
    margin: '1rem auto',
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 400,
    border: '1px solid #e0e0e0',
  },
  headerCell: {
    textAlign: 'center',
  },
  secondHeaderRow: {
    borderTop: '2px solid #e0e0e0',
    borderBottom: '2px solid #e0e0e0',
  },
  firstHeaderCell: {
    textAlign: 'left',
    width: '70%',
  },
  secondHeaderCell: {
    textAlign: 'left',
    width: '30%',
  },
  dataCell: {
    textAlign: 'left',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
