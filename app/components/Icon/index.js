import React, { PropTypes } from 'react';

function Icon(props) {
  return (
    <i className={props.type} />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
