import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationItem type="default" value="test" html={{ __html: '<u>test</u>' }} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders the correct type attribute', () => {
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('renders the correct html', () => {
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
  });

  it('renders the correct value', () => {
    expect(wrapper.text()).toBe('test');
  });
});
