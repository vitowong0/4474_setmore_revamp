import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// home header should take in 2 props
// text and image
// and render them accordingly

import ProfilePicture from '../../assets/images/ProfileImage.png';

// take user fname and store in async -- or just hardcode it lol

function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, fname!</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('Will navigate to settings');
            }}>
            <Image source={ProfilePicture} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeHeader;

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
  },

  imageContainer: {
    flex: 0.75,
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});
