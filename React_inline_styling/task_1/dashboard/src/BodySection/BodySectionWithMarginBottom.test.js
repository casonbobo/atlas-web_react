import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'jest-dom/extend-expect';
import BodySectionWithMarginBottom from '../../BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom>
      <h2>test title</h2>
      <p>test children node</p>
    </BodySectionWithMarginBottom>, {
      context: {
        marginBottom: '10px'
      }
    });

    expect(wrapper.find(BodySection).length).toBe(1);

    expect(wrapper.find(BodySection).prop('marginBottom')).toBe('10px');
  });
});
