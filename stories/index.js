import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './../app/components/Button';
import Heading from './../app/components/Heading';


storiesOf('Button', module)
  .addWithInfo(
    'with label',
    `Basic Usage of Button`,
    () => (
    <Button onClick={action('clicked')} label="Hello Button">
      Child Element
    </Button>
  ))
  .add('with href', () => (
    <Button href="http://google.com" onClick={action('clicked')} label="Hello Button">
      Child Element
    </Button>
  ))
  .add('with children', () => (
    <Button onClick={action('clicked')}>
      Child Element
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} label="">
      😀 😎 👍 💯
    </Button>
  ));

storiesOf('Heading', module)
  .add('1', () => (
    <Heading order={1}>
      Child Element
    </Heading>
  ))
  .add('2', () => (
    <Heading order={2}>
      Child Element
    </Heading>
  ))
  .add('3', () => (
    <Heading order={3}>
      Child Element
    </Heading>
  ))
  .add('4', () => (
    <Heading order={4}>
      Child Element
    </Heading>
  ));
