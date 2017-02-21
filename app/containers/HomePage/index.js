/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Heading from './../../components/Heading';
import Card from './../../components/Card';
import Image from './../../components/Image';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Heading order={1}>
          Hello World
        </Heading>
        <Heading order={2}>
          or "How to bridge the gap between frontend and backend"
        </Heading>
        <Image src="http://i.imgur.com/qGY8t5d.jpg"/>
        <br/>
        <Card icon="overview">
          <Heading order={3}>
            This is a demo card!
          </Heading>
        </Card>
        <Card icon="external" bordered>
          <Heading order={3}>
            And this is another demo card! Its even bordered :O
          </Heading>
        </Card>
      </div>
    );
  }
}
