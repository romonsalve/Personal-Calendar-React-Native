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
import FilterScreen from '../views/FilterScreen';
import MainHeader from '../components/MainHeader';

function stackNavigationOptions({ navigation }) {
  const isOnTopScreen = navigation.state.index === 0;
  return {
    tabBarVisible: isOnTopScreen,
    swipeEnabled: isOnTopScreen,
  };
}

const commonStack = {
  Details: BookingDetailScreenContainer,
  Edit: BookingEditContainer,
  Filters: FilterScreen,
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
