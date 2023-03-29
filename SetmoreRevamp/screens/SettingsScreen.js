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

import CustomButton from '../components/CustomButton';

function SettingsScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Settings'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.personContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.profileImage} source={profilePic} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.fullNameText}>Xiaoyun Bonato</Text>
            <View style={styles.buttonContainer}>
              <CustomButton
                text={'Edit profile'}
                textColour={Colours.white}
                backgroundColour={Colours.pastelyellow}
              />
            </View>
          </View>
        </View>

        <View style={styles.settingsContainer}>
          <View style={styles.settingsRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.settingIcons} source={details} />
            </View>
            <Text style={styles.settingsText}>Details</Text>
          </View>

          <View style={styles.settingsRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.settingIcons} source={communications} />
            </View>
            <Text style={styles.settingsText}>Communications</Text>
          </View>

          <View style={styles.settingsRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.settingIcons} source={paymentMethods} />
            </View>
            <Text style={styles.settingsText}>Payment Methods</Text>
          </View>

          <View style={styles.settingsRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.settingIcons} source={help} />
            </View>
            <Text style={styles.settingsText}>Help</Text>
          </View>

          <View style={styles.settingsRow}>
            <View style={styles.iconContainer}>
              <Image style={styles.settingIcons} source={terms} />
            </View>
            <Text style={styles.settingsText}>Terms & Conditions</Text>
          </View>
        </View>

        <View style={styles.preferencesContainer}>
          <View style={styles.settingsRow}>
          <View style={styles.iconContainer}>
            <Image style={styles.settingIcons} source={language} />
            </View>
            <Text style={styles.settingsText}>Language</Text>
          </View>
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
    flexDirection: 'row',

    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,

    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  imageContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    // alignItems: 'center',

    borderColor: 'red',
    borderWidth: 1,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,

    borderColor: 'orange',
    borderWidth: 1,
  },

  fullNameText: {
    fontSize: 20,
    fontWeight: 800,
    color: Colours.westerngrey,
  },

  buttonContainer: {
    width: 140,

    borderColor: 'red',
    borderWidth: 1,
  },

  settingsContainer: {
    width: '100%',
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,

    // borderColor: 'orange',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  settingsRow: {
    flexDirection: 'row',
    // justifyContent: 'center',
    paddingVertical: 5,
    alignItems: 'center',

    borderColor: 'red',
    borderWidth: 1,
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

  iconContainer: {
    paddingHorizontal: 20,
  },

  settingsText: {
    fontWeight: 700,
    fontSize: 16,
    color: Colours.westerngrey,
  },

  settingIcons: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },

  text: {
    color: 'red',
    fontSize: 20,
  },
});
