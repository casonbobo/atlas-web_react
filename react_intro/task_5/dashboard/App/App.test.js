import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('App-header');
  expect(header).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  const { getByTestId } = render(<App />);
  const body = getByTestId('App-body');
  expect(body).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  const { getByTestId } = render(<App />);
  const footer = getByTestId('App-footer');
  expect(footer).toBeInTheDocument();
});
