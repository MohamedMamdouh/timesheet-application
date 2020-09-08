import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LaunchScreen from '../Containers/LaunchScreen';
import CreateNewFlowScreen from '../Containers/CreateNewFlowScreen';
import HomeScreen from '../Containers/HomeScreen';
import TimesheetHistoryScreen from '../Containers/TimesheetHistoryScreen';
import ManagerScreen from '../Containers/ManagerScreen';
import TimeLogScreen from '../Containers/TimeLogScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PreLoadingNav = createStackNavigator(
  {
    LaunchScreen: {screen: LaunchScreen},
    CreateNewFlowScreen: {screen: CreateNewFlowScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    TimeLogScreen: TimeLogScreen,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const MainNav = createBottomTabNavigator({
  Home: HomeStack,
  TimeSheets: TimesheetHistoryScreen,
  Manager: ManagerScreen,
});

const App = createSwitchNavigator(
  {
    PreLoading: PreLoadingNav,
    App: MainNav,
  },
  {
    initialRouteName: 'PreLoading',
  },
);
export default createAppContainer(App);
