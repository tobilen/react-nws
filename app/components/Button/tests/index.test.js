/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const handleRoute = () => {};
const href = 'http://google.com';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => mount(
  <Button href={href} {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {

  it('should render a <button> tag', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ handleRoute, type });
    expect(renderedComponent.find('button').prop('type')).toBeUndefined();
  });
});
