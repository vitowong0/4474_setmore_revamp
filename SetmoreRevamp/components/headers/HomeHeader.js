import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// header should take in 2 props
// image and text
// and render them accordingly

function HomeHeader() {
  return (
    <View style={styles.headerBkg}>
      <Text style={styles.text}>hello test</Text>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  headerBkg: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 800,
  },
});
