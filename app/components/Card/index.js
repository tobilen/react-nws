import React, { PropTypes, Children } from 'react';
import Icon from './../Icon'
import Image from './../Image'
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Card(props) {
  // Render an anchor tag
  return (
    <a href={props.href}>
      <figure className="bordered" styleName="card">
        <div styleName="upper">
          <Icon type={props.icon}/>
        </div>
        <figcaption styleName="lower">
          {Children.toArray(props.children)}
        </figcaption>
      </figure>
    </a>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bordered: PropTypes.bool,
  href: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string
};

export default CSSModules(Card, styles);
