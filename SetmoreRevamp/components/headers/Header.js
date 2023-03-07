import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// header should take in 2 props
// image and text
// and render them accordingly

function Header() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerBkg}>
        <Text style={styles.text}>hello from inside regular header</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },

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
