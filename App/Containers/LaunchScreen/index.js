import React, {Component} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {Button} from 'native-base';

import styles from './styles';

export default class LaunchScreen extends Component {
  render() {
    const {navigation} = this.props;
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
            onPress={() => navigation.navigate('CreateNewFlow')}>
            <Text>Create new</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
