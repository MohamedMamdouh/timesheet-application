import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import styles from './styles';

const LogCardComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>From: 13:00</Text>
        <Text style={styles.text}>To: 20:00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button info style={styles.btn}>
          <Text>Edit</Text>
        </Button>
        <Button danger style={styles.btn}>
          <Text>Delete</Text>
        </Button>
      </View>
    </View>
  );
};

export default LogCardComponent;
