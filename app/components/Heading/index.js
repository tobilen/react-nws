import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Heading(props) {
  // Render an anchor tag
  let heading = (
      <h3 styleName='h3'>
        {Children.toArray(props.children)}
      </h3>
  );

  switch(props.order) {
    case 1: heading = (
        <h1 styleName='h1'>
          {Children.toArray(props.children)}
        </h1>
      );
    break;
    case 2: heading = (
        <h2 styleName='h2'>
          {Children.toArray(props.children)}
        </h2>
      );
    break;
    case 3: heading = (
        <h3 styleName='h3'>
          {Children.toArray(props.children)}
        </h3>
      );
    break;
    case 4: heading = (
        <h4 styleName='h4'>
          {Children.toArray(props.children)}
        </h4>
      );
    break;
    case 5: heading = (
        <h5 styleName='h5'>
          {Children.toArray(props.children)}
        </h5>
      );
    break;
    case 6: heading = (
        <h6 styleName='h6'>
          {Children.toArray(props.children)}
        </h6>
      );
    break;
  }

  return heading;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  order: PropTypes.number
};

export default CSSModules(Heading, styles);
