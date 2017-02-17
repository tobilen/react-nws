import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { storiesOf, action } from '@kadira/storybook';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


storiesOf('Button', module)
  .add('with text', () => (
    <MuiThemeProvider>
      <RaisedButton onClick={action('clicked')} label="Hello Button" />
    </MuiThemeProvider>
  ))
  .add('with some emoji', () => (
    <MuiThemeProvider>
      <RaisedButton onClick={action('clicked')} label="😀 😎 👍 💯" />
    </MuiThemeProvider>
  ));
