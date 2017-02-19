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

  it('should render a <svg> tag', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

});
