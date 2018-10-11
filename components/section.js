import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const Section = ({ styles = {}, children }) => (
  <View style={Object.assign(defaultStyles, styles)}>{children}</View>
);

const defaultStyles = StyleSheet.create({
  marginBottom: 10,
  borderBottomWidth: 4,
});

export default Section;
