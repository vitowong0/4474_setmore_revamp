import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colours} from '../constants/styles';

import SubHeader from '../components/headers/SubHeader';
import profilePic from '../assets/images/boywhatthehell.png';
import details from '../assets/icons/details.png';
import communications from '../assets/icons/communications.png';
import paymentMethods from '../assets/icons/paymentMethods.png';
import help from '../assets/icons/help.png';
import terms from '../assets/icons/terms.png';
import language from '../assets/icons/language.png';

function SettingsScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Settings'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.personContainer}>
          <View>
            <Image style={styles.profileImage} source={profilePic} />
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Image style={styles.settingIcons} source={details} />
          <Image style={styles.settingIcons} source={communications} />
          <Image style={styles.settingIcons} source={paymentMethods} />
          <Image style={styles.settingIcons} source={help} />
          <Image style={styles.settingIcons} source={terms} />
        </View>
        <View style={styles.preferencesContainer}>
          <Image style={styles.settingIcons} source={language} />
        </View>
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.white,
  },

  header: {
    flex: 1.2,
  },

  bodyContainer: {
    flex: 7,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  personContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,

    // borderColor: 'green',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  settingsContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,

    // borderColor: 'orange',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  preferencesContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,

    // borderColor: 'brown',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  profileImage: {
    width: 100,
    height: 100,
  },

  settingIcons: {
    width: 50,
    height: 50,
  },

  text: {
    color: 'red',
    fontSize: 20,
  },
});
