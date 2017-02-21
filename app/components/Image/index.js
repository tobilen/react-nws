import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Image extends React.Component {
  compoundClasses() {
    return ([
      'image',
      (this.props.contain?'contain':'')
    ]).join(" ")
  }

  renderSimpleImage(e) {
    return (
      <img styleName={this.compoundClasses()} src={e.props.src} />
    );
  }

  renderResponsiveImage() {
    return (
      <picture className={this.compoundClasses()}>
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
  contain: PropTypes.bool,
};

export default CSSModules(Image, styles, {allowMultiple: true});
