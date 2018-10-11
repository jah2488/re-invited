import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const Contact = ({ person, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{person.name}</Text>
    {onPress && <Button title="Invite" style={styles.button} onPress={onPress} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'lightgreen',
    padding: 10,
    width: '100%',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    borderWidth: 3,
    borderColor: 'black',
  },
});

export default Contact;
