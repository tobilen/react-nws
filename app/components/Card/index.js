import React, { PropTypes, Children } from 'react';
import Icon from './../Icon'
import Image from './../Image'
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Card extends React.Component {
  renderUpper() {
    if(this.props.icon)
      return (
        <Icon type={this.props.icon}/>
      )
    else if(this.props.image)
      return (
        <Image src={this.props.image} contain/>
      )
  }

  compoundClasses() {
    return ([
      'card',
      (this.props.bordered?'bordered':''),
      (this.props.icon?'with-icon':''),
      (this.props.image?'with-image':'')
    ]).join(" ")
  }

  render() {
    return (
      <a href={this.props.href}>
        <figure styleName={this.compoundClasses()}>
          <div styleName="upper">
            {this.renderUpper()}
          </div>
          <figcaption styleName="lower">
            {Children.toArray(this.props.children)}
          </figcaption>
        </figure>
      </a>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bordered: PropTypes.bool,
  href: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string
}

export default CSSModules(Card, styles, {allowMultiple: true});
