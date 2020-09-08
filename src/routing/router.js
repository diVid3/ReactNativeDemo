import
  React, {
  Component
} from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import * as routes from './routes';

const {
  Navigator,
  Screen,
} = createStackNavigator();

export class Router extends Component {

  getScreens = () => {

    const screens = [];

    for (const routeName in routes) {

      const route = routes[routeName];

      screens.push(

        <Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}/>
      );
    }

    return screens;
  };

  render = () => {

    const screens = this.getScreens();

    return (

      <NavigationContainer>

        <Navigator initialRouteName={'Landing'}>

          { screens }
        </Navigator>
      </NavigationContainer>
    );
  };
}
