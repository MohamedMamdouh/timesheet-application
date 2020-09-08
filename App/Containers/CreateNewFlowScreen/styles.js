import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles} from '../../Themes/';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
  },
  stepperContainer: {
    flex: 1,
    width: '90%',
  },
  stepContainer: {
    marginTop: '30%',
  },
  inputContainer: {
    marginVertical: '10%',
  },
});
