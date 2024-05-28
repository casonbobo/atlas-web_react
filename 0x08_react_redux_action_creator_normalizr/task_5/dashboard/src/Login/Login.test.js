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
  it('submit button is disabled by default', () => {
    const { getByRole } = render(<Login />);
    const submitButton = getByRole('button', { name: 'Login' });
    expect(submitButton).toBeDisabled();
  });

  it('submit button is enabled after changing the value of the two inputs', async () => {
    const { getByRole, getByLabelText } = render(<Login />);
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const submitButton = getByRole('button', { name: 'Login' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

});
