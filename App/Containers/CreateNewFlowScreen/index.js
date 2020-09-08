import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Item, Input} from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import NewFlowActions from '../../Redux/NewFlowRedux';

import styles from './styles';

const CreateNewFlowScreen = ({navigation}) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [employeeFirstName, serEmployeeFirstName] = useState('');
  const [employeeLastName, setEmployeeLastName] = useState('');
  const [managerFirstName, setManagerFirstName] = useState('');
  const [managerLastName, setManagerLastName] = useState('');

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.newFlow.userId);

  const handleSubmit = () => {
    dispatch(
      NewFlowActions.flowRequest(
        employeeFirstName,
        employeeLastName,
        managerFirstName,
        managerLastName,
        projectTitle,
      ),
    );
  };

  if (userId) {
    navigation.navigate('App');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepperContainer}>
        <ProgressSteps>
          <ProgressStep label="Create Project">
            <View style={styles.stepContainer}>
              <Item success style={styles.inputContainer}>
                <Input
                  placeholder="Project Title"
                  value={projectTitle}
                  onChangeText={(text) => setProjectTitle(text)}
                />
              </Item>
            </View>
          </ProgressStep>
          <ProgressStep label="Create Manager">
            <View style={styles.stepContainer}>
              <Item success style={styles.inputContainer}>
                <Input
                  placeholder="First Name"
                  value={managerFirstName}
                  onChangeText={(text) => setManagerFirstName(text)}
                />
              </Item>
              <Item success style={styles.inputContainer}>
                <Input
                  placeholder="Last Name"
                  value={managerLastName}
                  onChangeText={(text) => setManagerLastName(text)}
                />
              </Item>
            </View>
          </ProgressStep>
          <ProgressStep label="Create Employee" onSubmit={handleSubmit}>
            <View style={styles.stepContainer}>
              <Item success style={styles.inputContainer}>
                <Input
                  placeholder="First Name"
                  value={employeeFirstName}
                  onChangeText={(text) => serEmployeeFirstName(text)}
                />
              </Item>
              <Item success style={styles.inputContainer}>
                <Input
                  placeholder="Last Name"
                  value={employeeLastName}
                  onChangeText={(text) => setEmployeeLastName(text)}
                />
              </Item>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewFlowScreen;
