import React, { PropTypes } from 'react';


function ImageResponsive(props) {
  return (
    <source
        srcSet={props.src}
        media={
          (props.viewportMin)?`(min-width: ${props.viewportMin}px)`:
            (props.viewportMax)?`(max-width: ${props.viewportMax}px)`:
              `(min-width: 1px)`
        }
        default={props.default}
    />
  );
}

ImageResponsive.defaultProps = {
  default: null
};
ImageResponsive.propTypes = {
  viewportMin: PropTypes.number,
  viewportMax: PropTypes.number,
  default: PropTypes.bool,
  src: PropTypes.string.isRequired
};

export default ImageResponsive;
