import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Item, Input} from 'native-base';

import styles from './styles';

export default class CreateNewFlow extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, width: '90%'}}>
          <ProgressSteps>
            <ProgressStep label="Create Project">
              <View style={{marginTop: '30%'}}>
                <Item success style={{marginVertical: '10%'}}>
                  <Input placeholder="Project Title" />
                </Item>
              </View>
            </ProgressStep>
            <ProgressStep label="Create Manager">
              <View style={{marginTop: '30%'}}>
                <Item success style={{marginVertical: '10%'}}>
                  <Input placeholder="First Name" />
                </Item>
                <Item success style={{marginVertical: '10%'}}>
                  <Input placeholder="Last Name" />
                </Item>
              </View>
            </ProgressStep>
            <ProgressStep label="Create Employee">
              <View style={{marginTop: '30%'}}>
                <Item success style={{marginVertical: '10%'}}>
                  <Input placeholder="First Name" />
                </Item>
                <Item success style={{marginVertical: '10%'}}>
                  <Input placeholder="Last Name" />
                </Item>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </SafeAreaView>
    );
  }
}
