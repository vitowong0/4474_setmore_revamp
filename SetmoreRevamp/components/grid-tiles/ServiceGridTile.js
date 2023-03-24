import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ServiceInfoOverview from '../models/ServiceInfoOverview';
import {SERVICEINFO} from '../data/ServiceInfo';

function ServiceGridTile(
  id,
  name,
  description,
  rating,
  services,
  staff,
  timesAvailable,
) {
  <View style={styles.rootContainer}>
    <Text style={styles.text}>hello world</Text>
    <View>{id}</View>
    <View>{timesAvailable}</View>
  </View>;
}

export default ServiceGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  text: {
    fontSize: 20,
    color: 'green',
  },
});
