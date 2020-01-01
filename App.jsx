import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, QuizScreen, PeaceScreen, LibraryScreen, AboutScreen } from './Screens';

const navigationOptions = title => ({
  title,
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: navigationOptions('Home'),
    },
    About: {
      screen: AboutScreen,
      navigationOptions: navigationOptions('About'),
    },
    Library: {
      screen: LibraryScreen,
      navigationOptions: navigationOptions('Library'),
    },
    Peace: {
      screen: PeaceScreen,
      navigationOptions: navigationOptions('Peace Building'),
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: navigationOptions('Quiz'),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff5252',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
