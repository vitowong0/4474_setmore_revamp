import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({text, textColour, backgroundColour, buttonWidth}) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        {backgroundColor: backgroundColour},
        {width: buttonWidth},
      ]}>
      <Text style={[styles.buttonText, {color: textColour}]}>{text}</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // marginRight: 10,
    // marginLeft: 10,
    // width: 170,

    // borderColor: 'red',
    // borderWidth: 1,
  },

  buttonText: {
    fontWeight: 800,
    fontSize: 18,
    textAlign: 'center',
  },
});
