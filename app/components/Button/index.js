import React, { PropTypes, Children } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Icon from './../Icon'

class Button extends React.Component {
  renderIcon() {
    if(this.props.icon) {
      return (
        <Icon type={this.props.icon}/>
      )
    }
    return null;
  }

  render() {
    let button = (
      <a href={this.props.href} styleName='link'>
        {(!this.props.iconTrailing) ? this.renderIcon() : null}
        {Children.toArray(this.props.children)}
        {(this.props.iconTrailing) ? this.renderIcon() : null}
      </a>
    );

    // If the Button has a handleRoute prop, we want to render a button
    if (this.props.onClick) {
      button = (
        <button onClick={this.props.onClick} styleName='button'>
          {Children.toArray(this.props.children)}
        </button>
      );
    }

    return button;
  }
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconTrailing: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CSSModules(Button, styles);
