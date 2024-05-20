import React from 'react';
import { shallow, configure } from 'enzyme';
import { StyleSheetTestUtils } from '@testing-library/jest-dom/extend-expect';
import Login from './Login'; // Import your Login component
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
