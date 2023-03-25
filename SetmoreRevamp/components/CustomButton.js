import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({text, textColour, backgroundColour, onPress}) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.buttonContainer, {backgroundColor: backgroundColour}]}
        onPress={onPress}>
        <Text style={[styles.buttonText, {color: textColour}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },

  buttonText: {
    fontWeight: 800,
    fontSize: 20,
    textAlign: 'center',
  },
});
