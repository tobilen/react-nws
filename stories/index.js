import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import Button from './../app/components/Button';
import Icon from './../app/components/Icon';
import Heading from './../app/components/Heading';
import Image from './../app/components/Image';
import ImageResponsive from './../app/components/Image/ImageResponsive';
import Card from './../app/components/Card';

const iconOptions = {
  overview: "overview",
  external: "external",
  "neusta-orb": "neusta-orb"
};

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
    <Button href={text("href", "http://google.com")} icon={select("Icon", iconOptions, "overview")}>
      {text("Label", "Link with Icon")}
    </Button>
  ))
  .addWithInfo(
    'with trailing icon',
    `Link Element with Icon. To override default positioning, icon-position parameter can be specified`,
    () => (
    <Button href={text("href", "http://google.com")} icon={select("Icon", iconOptions, "external")} iconTrailing={boolean("Trailing Icon", true)}>
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

/* ************************************************* */

storiesOf('Icon', module)
.addDecorator(withKnobs)
.addWithInfo(
  'Basic',
  `Basic Usage of Icon Element.`,
  () => (
    <Icon type={select("Icon", iconOptions, "external")} size={number("Size", 1)}/>
  ));


/* ************************************************* */


storiesOf('Image', module)
.addDecorator(withKnobs)
.addWithInfo(
  'Basic',
  `Basic Usage of Image Element.`,
  () => (
    <Image src={text("Source", "http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg")}/>
  ))
.addWithInfo(
  'Responsive',
  `Usage of repsonsive Image Element`,
  () => (
    <Image>
      <ImageResponsive viewportMax={600} src={text("Source", "http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg")}/>
      <ImageResponsive viewportMin={601} src={text("Source", "http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg")}/>
      <ImageResponsive default src={text("Source", "http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg")}/>
    </Image>
  ));


/* ************************************************* */


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

/* ************************************************* */
storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Basic',
    'Basic Usage of Card',
    () => (
      <Card icon={select("Icon", iconOptions, "overview")} bordered={boolean("Bordered", true)} href={text("href", "http://google.com")}>
        <Heading order={number("Heading Order", 3, headingOrderOptions)}>
          {text("Label", "Web Developer eCommerce (m/w)")}
        </Heading>
      </Card>
    ))
  .addWithInfo(
    'with Icon',
    'Card element with icon in upper part',
    () => (
      <Card icon={select("Icon", iconOptions, "overview")} bordered={boolean("Bordered", true)} href={text("href", "http://google.com")}>
        <Heading order={number("Heading Order", 3, headingOrderOptions)}>
          {text("Label", "Web Developer eCommerce (m/w)")}
        </Heading>
      </Card>
    ))
  .addWithInfo(
    'with Image',
    'Card element with image in upper part',
    () => (
      <Card
          image={text("Image URL", "http://www.neusta-webservices.de/resources/images/slide_3_635x300.jpg")}
          bordered={boolean("Bordered", true)}
          href={text("href", "http://google.com")}
      >
        <Heading order={number("Heading Order", 3, headingOrderOptions)}>
          {text("Label", "Web Developer eCommerce (m/w)")}
        </Heading>
      </Card>
    ))

