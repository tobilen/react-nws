import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Button(props) {
  // Render an anchor tag
  let button = (
      <button onClick={props.onClick} label={props.label} styleName='button'>
        {Children.toArray(props.children)}
      </button>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.href) {
    button = (
        <a href={props.href} onClick={props.handleRoute} label={props.label} styleName='link'>
          {Children.toArray(props.children)}
        </a>
    );
  }

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
        <a onClick={props.handleRoute} label={props.label} styleName='link'>
          {Children.toArray(props.children)}
        </a>
    );
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CSSModules(Button, styles);
