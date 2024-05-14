import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const HeaderCell = ({ children, colSpan = 1 }) => (
    <th colSpan={colSpan} style={{ backgroundColor: isHeader && !textSecondCell ? '#deb5b545' : '#f5f5f5ab' }}>
      {children}
    </th>
  );

  const DataCell = ({ children }) => <td>{children}</td>;

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr>
          <HeaderCell colSpan={2}>{textFirstCell}</HeaderCell>
        </tr>
      );
    } else {
      return ( 
        <tr>
          <HeaderCell>{textFirstCell}</HeaderCell>
          <HeaderCell>{textSecondCell}</HeaderCell>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <DataCell>{textFirstCell}</DataCell>
        <DataCell>{textSecondCell}</DataCell>
      </tr>
    );
  }
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CourseListRow;
