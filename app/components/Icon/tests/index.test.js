/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const renderComponent = (props = {}) => mount(
  <Icon type={type} {...props} />
);

describe('<Icon />', () => {

  it('should not have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(false);
  });

});
