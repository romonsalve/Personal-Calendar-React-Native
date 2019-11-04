import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import ReservedBookingScreen from '../views/ReservedBookingScreen';
import ConfirmedBookingScreen from '../views/ConfirmedBookingScreen';
import AttendedBookingScreen from '../views/AttendedBookingScreen';
import SkippedBookingScreen from '../views/SkippedBookingScreen';
import PendingBookingScreen from '../views/PendingBookingScreen';
import WaitingBookingScreen from '../views/WaitingBookingScreen';
import BookingDetailScreenContainer from '../views/BookingDetailScreenContainer';
import BookingEditContainer from '../views/BookingEditContainer';
import SelectList from '../components/SelectList';
import MainHeader from '../components/MainHeader';
import { Colors, Spacing } from '../styles';
import es_CL from '../i18n/es-CL';

function stackNavigationOptions({ navigation }) {
  const isOnTopScreen = navigation.state.index === 0;
  return {
    tabBarVisible: isOnTopScreen,
    swipeEnabled: isOnTopScreen,
    tabBarLabel: es_CL.screens[navigation.state.routeName].tabBarLabel,
  };
}

const commonStack = {
  Details: BookingDetailScreenContainer,
  Edit: BookingEditContainer,
  SelectList,
};

const ReservedStack = createStackNavigator({
  Reserved: ReservedBookingScreen,
  ...commonStack,
});

const ConfirmedStack = createStackNavigator({
  Confirmed: ConfirmedBookingScreen,
  ...commonStack,
});

const AttendedStack = createStackNavigator({
  Attended: AttendedBookingScreen,
  ...commonStack,
});

const SkippedStack = createStackNavigator({
  Skipped: SkippedBookingScreen,
  ...commonStack,
});

const PendingStack = createStackNavigator({
  Pending: PendingBookingScreen,
  ...commonStack,
});

const WaitingStack = createStackNavigator({
  Waiting: WaitingBookingScreen,
  ...commonStack,
});

ReservedStack.navigationOptions = stackNavigationOptions;
ConfirmedStack.navigationOptions = stackNavigationOptions;
AttendedStack.navigationOptions = stackNavigationOptions;
SkippedStack.navigationOptions = stackNavigationOptions;
PendingStack.navigationOptions = stackNavigationOptions;
WaitingStack.navigationOptions = stackNavigationOptions;

const tabNavigationRoute = {
  Reserved: ReservedStack,
  Confirmed: ConfirmedStack,
  Attended: AttendedStack,
  Skipped: SkippedStack,
  Pending: PendingStack,
  Waiting: WaitingStack,
};

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: {
      fontSize: 5,
      color: Colors.black,
      padding: 0,
    },
    upperCaseLabel: false,
    style: {
      backgroundColor: Colors.white,
    },
    indicatorStyle: {
      backgroundColor: Colors.blue,
      top: 0,
    },
  },
};

const TabNavigator = createMaterialTopTabNavigator(tabNavigationRoute, tabNavigatorConfig);

const MainStackNavigator = createStackNavigator(
  { Home: TabNavigator },
  {
    defaultNavigationOptions: {
      header: <MainHeader />,
    },
  },
);

const AppContainer = createAppContainer(MainStackNavigator);
export default AppContainer;
