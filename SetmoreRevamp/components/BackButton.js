import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import button from '../assets/images/gort.png';

const BackButton = () => {
  return (
    <View>
      <Image style={styles.image} source={button} />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
