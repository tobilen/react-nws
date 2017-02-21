/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const children = (<h1>Test test for a card</h1>);
const image = <Image src="http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg"/>;
const renderComponent = (props = {}) => mount(
  <Card image={image} {...props}>
    {children}
  </Card>
);

describe('<Card />', () => {

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
