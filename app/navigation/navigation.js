import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import ReservedBookingScreen from '../views/ReservedBookingScreen';
import ConfirmedBookingScreen from '../views/ConfirmedBookingScreen';
import AttendedBookingScreen from '../views/AttendedBookingScreen';
import SkippedBookingScreen from '../views/SkippedBookingScreen';
import PendingBookingScreen from '../views/PendingBookingScreen';
import WaitingBookingScreen from '../views/WaitingBookingScreen';


import * as Status from '../constants/status';

const routeConfig = {
  Reserved: {
    screen: ReservedBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.RESERVED],
    },
  },
  Confirmed: {
    screen: ConfirmedBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.CONFIRMED],
    },
  },
  Attended: {
    screen: AttendedBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.ATTENDED],
    },
  },
  Skipped: {
    screen: SkippedBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.SKIPPED],
    },
  },
  Pending: {
    screen: PendingBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.PENDING],
    },
  },
  Waiting: {
    screen: WaitingBookingScreen,
    navigationOptions: {
      tabBarLabel: Status.STATUS_TEXT[Status.WAITING],
    },
  },
};

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
};

const TabNavigator = createMaterialTopTabNavigator(routeConfig, tabNavigatorConfig);
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
