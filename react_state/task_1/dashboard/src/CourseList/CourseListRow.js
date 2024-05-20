import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const HeaderCell = ({ children, colSpan = 1 }) => (
    <th className={css(styles.headerCell)} colSpan={colSpan} style={{ backgroundColor: isHeader && !textSecondCell ? '#deb5b545' : '#f5f5f5ab' }}>
      {children}
    </th>
  );

  const DataCell = ({ children }) => <td className={css(styles.dataCell)}>{children}</td>;

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
