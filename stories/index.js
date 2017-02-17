import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { storiesOf, action } from '@kadira/storybook';
import Button from './../app/components/Button';

injectTapEventPlugin();


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')} label="Hello Button">
    </Button>
  ))
  .add('with children', () => (
    <Button onClick={action('clicked')}>
      Child Element
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="😀 😎 👍 💯" />
  ));
