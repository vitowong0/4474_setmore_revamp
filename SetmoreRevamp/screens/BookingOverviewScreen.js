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
import {Colors} from 'react-native/Libraries/NewAppScreen';

function BookingOverviewScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <SubHeader headerTitle={'Booking Overview'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bookingWithContainer}>
          <Text style={styles.boldGrey}>Booking with:</Text>
          <View style={styles.imageAndTextContainer}>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image style={styles.staffImage} source={staff} />
                <Text style={styles.employee}>Briar</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.serviceSelectionContainer}>
          <Text style={styles.boldGrey}>Selected services</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.smallGreenText}>Baby Glow Facial</Text>
            <Text style={[styles.smallGreenText, {color: Colours.westerngrey}]}>
              $100
            </Text>
          </View>
          <Text style={styles.smallText}>1 hour</Text>
          <Text style={styles.smallBoldText}>
            Leave with a skin plan, a serious glow, and a feeling of complete
            elation.
          </Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.boldGreyDateTime}>Date selected</Text>
          <Text style={styles.boldTurquoise}>Friday, April 7th, 2023</Text>
          <Text style={styles.boldGreyDateTime}>Time selected</Text>

          <View style={styles.timeContainer}>
            <TimeButton text={'4:20 PM'} disableButton={false} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('Modify appointment? Y/N');
            }}>
            <CustomButton
              text={'Modify'}
              textColour={Colours.black}
              backgroundColour={Colours.lightergrey}
              buttonWidth={160}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Cancel appointment? Y/N');
            }}>
            <CustomButton
              text={'Cancel'}
              textColour={Colours.white}
              backgroundColour={Colours.buttoncancel}
              buttonWidth={160}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default BookingOverviewScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,

    borderTopWidth: 1,
    borderTopColor: 'red',
  },

  bookingWithContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  imageAndTextContainer: {
    alignItems: 'flex-start',
    paddingLeft: 10,
  },

  staffImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 10,
  },

  serviceSelectionContainer: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colours.pastelturquoise,
  },

  dateTimeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  timeContainer: {
    paddingTop: 15,
    paddingLeft: 10,
  },

  buttonContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'space-evenly',

    // borderColor: 'red',
    // borderWidth: 1,
  },

  boldGrey: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  boldGreyDateTime: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  boldTurquoise: {
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    color: Colours.darkturqouise,
    fontWeight: 800,
  },

  smallGreenText: {
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: '800',
    color: Colours.darkturqouise,
    marginBottom: 5,
  },

  smallText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 5,
    color: Colours.westerngrey,
  },

  smallBoldText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 10,
    color: Colours.westerngrey,
  },

  employee: {
    fontSize: 14,
    color: Colours.westerngrey,
    fontWeight: 800,
  },
});
