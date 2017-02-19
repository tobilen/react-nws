/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const src = "testsrc";
const renderComponent = (props = {}) => mount(
  <Image src={src} {...props} />
);

describe('<Image />', () => {

  it('should render <img> tag', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('img').length).toEqual(1);
  });

});
