import
  React, {
  Component,
} from 'react';

import {
  Router
} from './src/routing/router';

import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

export default class App extends Component {
  render = () => <Router/>
}
