import React, { PropTypes, Children } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function Button(props) {
  // Render an anchor tag
  let button = (
    <MuiThemeProvider>
      <RaisedButton onClick={props.onClick} label={props.label}>
        {Children.toArray(props.children)}
      </RaisedButton>
    </MuiThemeProvider>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <MuiThemeProvider>
        <RaisedButton onClick={props.handleRoute} label={props.label}>
          {Children.toArray(props.children)}
        </RaisedButton>
      </MuiThemeProvider>
    );
  }

  return (
    <MuiThemeProvider>
      {button}
    </MuiThemeProvider>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
