import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

// This HomeHeader should take in 1 prop, first_name
// and render both accordingly

import {Colours} from '../../constants/styles';
import ProfilePicture from '../../assets/images/gortini.png';

// take user first_name and store in async -- or just hardcode it lol
function HomeHeader({first_name}) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, {first_name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            // onPress={() => {
            //   alert('Will navigate to settings');

            // }}
            onPress={() => {
              navigation.navigate('Settings');
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
    // make a coloured border around the picture
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,

    borderColor: Colours.darkturqouise,
    borderWidth: 1,
  },
});
