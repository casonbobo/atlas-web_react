import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from "../../Notifications/Notifications";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../../Footer/Footer';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contains the Login component', () => {
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contains the Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
});

test('renders the Login component when isLoggedIn is false', () => {
  render(<App isLoggedIn={false} />);
  const loginHeader = screen.getByRole('heading', { name: 'Log In' });
  expect(loginHeader).toBeInTheDocument();
});

test('renders the CourseList component when isLoggedIn is true', () => {
  render(<App isLoggedIn={true} />);
  const courseListHeader = screen.getByRole('cellheader', { name: 'Available courses' });
  expect(courseListHeader).toBeInTheDocument();
  const loginHeader = screen.queryByRole('heading', { name: 'Log In' });
  expect(loginHeader).not.toBeInTheDocument();
});
