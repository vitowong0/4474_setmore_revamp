import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import {Colours} from '../constants/styles';
import SubHeader from '../components/headers/SubHeader';
import CustomButton from '../components/CustomButton';
import TimeButton from '../components/TimeButton';

import staff from '../assets/images/briar.png';

function BookingOverviewScreen() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <SubHeader headerTitle={'Booking Overview'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.boldText}>Booking with</Text>
          <View style={styles.staffContainer}>
            <Image source={staff} style={styles.image} />
            <Text style={styles.smallBoldText}>Briar</Text>
          </View>

          <Text style={styles.boldText}>Selected services</Text>
          <View style={styles.inlineView}>
            <Text style={styles.smallGreenText}>Baby Glow Facial</Text>
            <Text
              style={[styles.smallGreenText, {color: Colours.lightturqouise}]}>
              $100
            </Text>
          </View>
          <Text style={styles.smallText}>1 hour</Text>
          <Text style={styles.smallBoldText}>
            Leave with a skin plan, a serious glow, and a feeling of complete
            elation.
          </Text>
          <Text style={styles.boldText}>Date Selected</Text>
          <Text style={styles.bigGreenText}>Friday, March 10</Text>
          <Text style={styles.boldText}>Time Selected</Text>
          <View style={styles.timeContainer}>
            <TimeButton text={'4:20 PM'} disableButton={true} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={'Modify'}
              textColour={Colours.black}
              backgroundColour={Colours.lightergrey}
            />
            <CustomButton
              text={'Cancel'}
              textColour={Colours.white}
              backgroundColour={Colours.buttoncancel}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default BookingOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    width: '100%',
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: 'red',
    borderTopWidth: 1,
  },

  bodyTextContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  bodyText: {
    fontWeight: '800',
    fontSize: 28,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  boldText: {
    fontWeight: '800',
    fontSize: 20,
    color: Colours.mediumgrey,
    marginTop: 30,
    marginBottom: 10,
  },

  smallGreenText: {
    fontWeight: '800',
    color: Colours.darkturqouise,
    marginBottom: 5,
  },

  bigGreenText: {
    fontWeight: '800',
    color: Colours.darkturqouise,
    fontSize: 28,
  },

  smallBoldText: {
    fontWeight: '800',
    color: Colours.mediumgrey,
    fontSize: 12,
  },

  smallText: {
    fontSize: 12,
    color: Colours.mediumgrey,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  staffContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  inlineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  timeContainer: {
    flexDirection: 'row',
  },
});
