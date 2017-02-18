import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import Button from './../app/components/Button';
import Heading from './../app/components/Heading';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Basic',
    `Basic Usage of a Link Element.`,
    () => (
    <Button href={text("href", "http://google.com")}>
      {text("Label", "Basic Usage")}
    </Button>
  ))
  .addWithInfo(
    'with Icon',
    `Link Element with Icon. By default, icons will be positioned before element children`,
    () => (
    <Button href={text("href", "http://google.com")} icon={text("icon", "overview")}>
      {text("Label", "Link with Icon")}
    </Button>
  ))
  .addWithInfo(
    'with trailing icon',
    `Link Element with Icon. To override default positioning, icon-position parameter can be specified`,
    () => (
    <Button href={text("href", "http://google.com")} icon={text("icon", "external")} icon-trailing={boolean("Trailing Icon", true)}>
      {text("Label", "Link with trailing Icon")}
    </Button>
  ))
  .addWithInfo(
    'with onClick listener',
    `Instead of an href, an onClick listener can be specified. In this case, a button will be rendered out instead of an a.`,
    () => (
    <Button onClick={action('clicked')}>
      {text("Label", "Link with onClick listener")}
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
