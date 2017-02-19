import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Icon(props) {
  return (
    <svg className={`dib v-mid ${props.type}`} width={`${props.size}em`} height={`${props.size}em`} styleName="svg-icon">
      <use xlinkHref={`#${props.type }`}></use>
    </svg>
  );
}

Icon.defaultProps = {
  size: 1
};
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default CSSModules(Icon, styles);
