import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from '@testing-library/jest-dom/extend-expect';
import CourseList from './CourseList';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

test('renders the 5 different rows', () => {
  render(<CourseList />);
  const availableCoursesHeader = screen.getByRole('cellheader', { name: 'Available courses' });
  const courseNameHeader = screen.getByRole('cellheader', { name: 'Course name' });
  const creditHeader = screen.getByRole('cellheader', { name: 'Credit' });
  const es6Row = screen.getByRole('row', { name: 'ES6' });
  const webpackRow = screen.getByRole('row', { name: 'Webpack' });
  const reactRow = screen.getByRole('row', { name: 'React' });
  expect(availableCoursesHeader).toBeInTheDocument();
  expect(courseNameHeader).toBeInTheDocument();
  expect(creditHeader).toBeInTheDocument();
  expect(es6Row).toBeInTheDocument();
  expect(webpackRow).toBeInTheDocument();
  expect(reactRow).toBeInTheDocument();
});
