import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 40,
  },
});

export default Header;
