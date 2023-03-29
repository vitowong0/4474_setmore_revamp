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

function HomeScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader first_name={'Gort'} />}</View>
      <View style={styles.bodyContainer}>
        <View style={styles.topContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="in top container"
              textColour={Colours.darkgreen}
              backgroundColour={Colours.lightturqouise}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('eat my booty');
                }}>
                <Text>hi</Text>
                <CustomButton
                  text="in bottom container"
                  textColour={Colours.darkgreen}
                  backgroundColour={Colours.lightturqouise}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: 'red',
    borderTopWidth: 1,
  },

  topContainer: {
    flex: 1,
    padding: 10,
  },

  bottomContainer: {
    flex: 1,
    padding: 10,

    borderColor: 'red',
    borderTopWidth: 1,
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
