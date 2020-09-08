import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Button} from 'native-base';
import {useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.userRequest('5f57b39eb004ef0e67c4d122'));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Calendar
        minDate={'2020-9-2'}
        maxDate={'2020-9-30'}
        onDayPress={(day) => {
          navigation.navigate('TimeLogScreen', {day});
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Button
          style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}
          success
          onPress={() => navigation.navigate('CreateNewFlowScreen')}>
          <Text>Generate Time sheet</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
