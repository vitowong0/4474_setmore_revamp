import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colours} from '../constants/styles';

const TimeButton = ({text, onPress, disableButton}) => {
  if (!disableButton) {
    return (
      <TouchableOpacity>
        <View style={styles.buttonContainer} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    );
  }
};

export default TimeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 15,
    // marginHorizontal: 5,
    borderWidth: 1,
    width: 90,
  },

  buttonText: {
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center',
    color: Colours.mediumgrey,
  },
});
