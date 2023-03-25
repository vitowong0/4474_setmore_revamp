import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackButton from '../BackButton';

// This regular Header should take in 1 prop (just the header text)
// and render it accordingly (depending on which page we're on)

function SettingsHeader({headerTitle}) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.infoContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <BackButton />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{headerTitle}</Text>
        </View>
      </View>
    </View>
  );
}

export default SettingsHeader;

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

    alignItems: 'center',
  },

  textContainer: {
    flex: 1.5,
    paddingLeft: 10,
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 800,
  },
});
