import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import Button from './../app/components/Button';
import Heading from './../app/components/Heading';

const iconOptions = {
  Overview: "overview",
  External: "external",
  Neusta: "neusta-orb"
}

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
    <Button href={text("href", "http://google.com")} icon={select("Icon", iconOptions, "Overview")}>
      {text("Label", "Link with Icon")}
    </Button>
  ))
  .addWithInfo(
    'with trailing icon',
    `Link Element with Icon. To override default positioning, icon-position parameter can be specified`,
    () => (
    <Button href={text("href", "http://google.com")} icon={select("Icon", iconOptions, "External")} iconTrailing={boolean("Trailing Icon", true)}>
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



const headingOrderOptions = {
  range: true,
  min: 1,
  max: 6,
  step: 1,
}
storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    '1',
    'Heading of Order 1',
    () => (
    <Heading order={number("Order", 1, headingOrderOptions)}>
      {text("Label", "Heading 1")}
    </Heading>
  ))
  .addWithInfo(
    '2',
    'Heading of Order 2',
    () => (
    <Heading order={number("Order", 2, headingOrderOptions)}>
      {text("Label", "Heading 2")}
    </Heading>
  ))
  .addWithInfo(
    '3',
    'Heading of Order 3',
    () => (
    <Heading order={number("Order", 3, headingOrderOptions)}>
      {text("Label", "Heading 3")}
    </Heading>
  ))
  .addWithInfo(
    '4',
    'Heading of Order 4',
    () => (
    <Heading order={number("Order", 4, headingOrderOptions)}>
      {text("Label", "Heading 4")}
    </Heading>
  ));
