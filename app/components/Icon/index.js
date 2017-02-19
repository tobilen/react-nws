import React, { PropTypes } from 'react';
const files = require.context('!svg-sprite!./../../assets/icons', false, /.*\.svg$/);
files.keys().forEach(files);

function Icon(props) {
  return (
    <svg className={`dib v-mid ${props.type}`} width="1em" height="1em">
      <use xlinkHref={`#${props.type }`}></use>
    </svg>
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
