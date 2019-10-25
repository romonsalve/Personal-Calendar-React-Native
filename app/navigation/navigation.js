import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReservedBookingScreen from '../views/ReservedBookingScreen';
import ConfirmedBookingScreen from '../views/ConfirmedBookingScreen';
import AttendedBookingScreen from '../views/AttendedBookingScreen';
import SkippedBookingScreen from '../views/SkippedBookingScreen';
import PendingBookingScreen from '../views/PendingBookingScreen';
import WaitingBookingScreen from '../views/WaitingBookingScreen';


import * as Status from '../constants/status';

const routeConfig = {
  Reserved: ReservedBookingScreen,
  Confirmed: ConfirmedBookingScreen,
  Attended: AttendedBookingScreen,
  Skipped: SkippedBookingScreen,
  Pending: PendingBookingScreen,
  Waiting: WaitingBookingScreen,
};

const tabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarLabel: Status.STATUS_TEXT[Status[navigation.state.routeName.toUpperCase()]],
  }),
};

const TabNavigator = createBottomTabNavigator(routeConfig, tabNavigatorConfig);
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
