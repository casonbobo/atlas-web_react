import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from '@testing-library/jest-dom/extend-expect';
import Header from './Header';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

test('renders Header component without crashing', () => {
  render(<Header />);
});

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
