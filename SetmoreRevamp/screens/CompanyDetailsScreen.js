import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colours} from '../constants/styles';

const CompanyDetailsScreen = () => {
  <View style={styles.root}>
    <Text style={styles.text}>hi, inside BookingScreen</Text>
  </View>;
};

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  text: {
    fontSize: 20,
    color: Colours.pastelblue,
  },
});
