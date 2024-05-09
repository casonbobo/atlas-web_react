import React from 'react';
import './CourseList.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const HeaderCell = ({ children, colSpan = 1 }) => (
    <th colSpan={colSpan}>{children}</th>
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

export default CourseListRow;
