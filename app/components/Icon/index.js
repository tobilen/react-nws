import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Icon(props) {
  return (
    <i className={props.type} />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
