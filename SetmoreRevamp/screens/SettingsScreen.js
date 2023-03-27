import React from 'react';
import {View, Text, StyleSheet, Settings} from 'react-native';

import Header from '../components/headers/Header';
import SubHeader from '../components/headers/SubHeader';

function SettingsScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Settings'} />
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>inside SettingsScreen.js</Text>
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
  },

  body: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'red',
    fontSize: 20,
  },
});
