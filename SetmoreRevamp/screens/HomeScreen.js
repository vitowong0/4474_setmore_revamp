import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Colours} from '../constants/styles';
import HomeHeader from '../components/headers/HomeHeader';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader first_name={'Gort'} />}</View>
      <View style={styles.bodyContainer}>
        <View style={styles.topContainer}>
          <Text>in top container</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="hello"
              textColour={Colours.darkgreen}
              backgroundColour={Colours.lightturqouise}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.5,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    // borderColor: Colours.darkturqouise,
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  topContainer: {
    flex: 1,
    padding: 10,

    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  bottomContainer: {
    flex: 1,
    padding: 10,

    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
