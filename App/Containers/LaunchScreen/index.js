import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {Button} from 'native-base';

import styles from './styles';

const LaunchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timesheet Task</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button success style={styles.button}>
          <Text>Select Existed project</Text>
        </Button>
        <Button
          success
          style={styles.button}
          onPress={() => navigation.navigate('CreateNewFlowScreen')}>
          <Text>Create new</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;
