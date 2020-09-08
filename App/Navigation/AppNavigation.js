import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen';
import CreateNewFlow from '../Containers/CreateNewFlow';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: {screen: LaunchScreen},
    CreateNewFlow: {screen: CreateNewFlow},
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

export default createAppContainer(PrimaryNav);
