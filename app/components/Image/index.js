import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Image extends React.Component {
  renderSimpleImage(e) {
    return (
      <img styleName='image' src={e.props.src} />
    );
  }

  renderResponsiveImage() {
    return (
      <picture>
        {Children.toArray(this.props.children)}
        {Children
          .toArray(this.props.children)
          .filter((el)=>el.props.default)
          .map((el)=>this.renderSimpleImage(el))
        }
      </picture>
    );
  }

  render() {
    if(this.props.children && this.props.children.length > 0) {
      return this.renderResponsiveImage();
    } else {
      return this.renderSimpleImage(this);
    }
  }
}

Image.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
};

export default CSSModules(Image, styles);
