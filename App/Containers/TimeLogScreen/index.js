import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import LogCardComponent from '../../Components/TimeLogComponents/LogCardComponent';
import styles from './styles';

const TimeLogScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TimeLogScreen</Text>
      <LogCardComponent />
    </SafeAreaView>
  );
};

export default TimeLogScreen;
