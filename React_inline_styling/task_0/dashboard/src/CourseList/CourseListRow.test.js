import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
  render(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell={null} />);
  const headerCell = screen.getByRole('cellheader', { name: 'Course Name' });
  expect(headerCell).toHaveAttribute('colspan', '2');
});

test('renders two cells when isHeader is true and textSecondCell is present', () => {
  render(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Course Code" />);
  const headerCell1 = screen.getByRole('cellheader', { name: 'Course Name' });
  const headerCell2 = screen.getByRole('cellheader', { name: 'Course Code' });
  expect(headerCell1).toBeInTheDocument();
  expect(headerCell2).toBeInTheDocument();
});

test('renders two td elements within a tr element when isHeader is false', () => {
  render(<CourseListRow isHeader={false} textFirstCell="John Doe" textSecondCell="Student ID" />);
  const dataCell1 = screen.getByRole('cell', { name: 'John Doe' });
  const dataCell2 = screen.getByRole('cell', { name: 'Student ID' });
  expect(dataCell1).toBeInTheDocument();
  expect(dataCell2).toBeInTheDocument();
});
