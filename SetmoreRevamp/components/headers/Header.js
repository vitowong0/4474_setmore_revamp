import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// header should take in 1 prop
// just text
// and render them accordingly (depending on which page we're on)

function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, fname!</Text>
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  textContainer: {
    flex: 1.5,
    paddingLeft: 10,
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },
});
