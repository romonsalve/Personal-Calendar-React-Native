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

// const routeConfig = {
//   Reserved: {
//     screen: ReservedBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.RESERVED],
//     },
//   },
//   Confirmed: {
//     screen: ConfirmedBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.CONFIRMED],
//     },
//   },
//   Attended: {
//     screen: AttendedBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.ATTENDED],
//     },
//   },
//   Skipped: {
//     screen: SkippedBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.SKIPPED],
//     },
//   },
//   Pending: {
//     screen: PendingBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.PENDING],
//     },
//   },
//   Waiting: {
//     screen: WaitingBookingScreen,
//     navigationOptions: {
//       tabBarLabel: Status.STATUS_TEXT[Status.WAITING],
//     },
//   },
// };


function stackNavigationOptions({ navigation }) {
  return { tabBarVisible: !(navigation.state.index > 0) };
}

const ReservedStack = createStackNavigator({
  Reserved: ReservedBookingScreen,
  Details: BookingDetailScreenContainer,
});

const ConfirmedStack = createStackNavigator({
  Confirmed: ConfirmedBookingScreen,
  Details: BookingDetailScreenContainer,
});

const AttendedStack = createStackNavigator({
  Attended: AttendedBookingScreen,
  Details: BookingDetailScreenContainer,
});

const SkippedStack = createStackNavigator({
  Skipped: SkippedBookingScreen,
  Details: BookingDetailScreenContainer,
});

const PendingStack = createStackNavigator({
  Pending: PendingBookingScreen,
  Details: BookingDetailScreenContainer,
});

const WaitingStack = createStackNavigator({
  Waiting: WaitingBookingScreen,
  Details: BookingDetailScreenContainer,
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

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
