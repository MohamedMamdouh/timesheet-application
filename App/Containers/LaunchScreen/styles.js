import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles} from '../../Themes/';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
  },
  titleContainer: {
    marginVertical: '40%',
  },
  title: {
    fontSize: 28,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
