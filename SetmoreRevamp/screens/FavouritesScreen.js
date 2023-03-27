import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';
import CustomButton from '../components/CustomButton';
import CompanyGridTile from '../components/grid-tiles/CompanyGridTile';

function FavouritesScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Favourites'} />
      </View>
      <View style={styles.bodyContainer}>
        {/* <View style={styles.buttonContainer}>
            <CustomButton
              text="Confirm"
              textColour={Colours.white}
              backgroundColour={Colours.buttonconfirm}
            />
            <CustomButton
              text="Cancel"
              textColour={Colours.white}
              backgroundColour={Colours.buttoncancel}
            />
          </View> */}
        <CompanyGridTile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    width: '100%',
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: Colours.darkturqouise,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});

export default FavouritesScreen;
