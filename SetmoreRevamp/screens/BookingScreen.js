import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import {Colours} from '../constants/styles';
import SubHeader from '../components/headers/SubHeader';
import CustomButton from '../components/CustomButton';
import ServiceItem from '../components/ServiceItem';
import ProviderImage from '../assets/images/briar.png';

function BookingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <SubHeader headerTitle={'Gort Salon'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bookingWithContainer}>
          <Text style={styles.boldGrey}>Booking with:</Text>
          <View style={{justifyContent: 'center', paddingLeft: 10}}>
            <Image source={ProviderImage} style={styles.providerImage} />
            <Text style={styles.employee}>Briar</Text>
          </View>
        </View>
        <View style={styles.serviceSelectionContainer}>
          <Text style={styles.boldGrey}>Select services</Text>
          <View style={styles.carouselContinaer}>
            <CustomButton
              text={'Featured'}
              textColour={Colours.westerngrey}
              backgroundColour={Colours.white}
            />
            <CustomButton
              text={'Hair'}
              textColour={Colours.westerngrey}
              backgroundColour={Colours.white}
            />
            <CustomButton
              text={'Nails'}
              textColour={Colours.westerngrey}
              backgroundColour={Colours.white}
            />
          </View>
        </View>
        <View style={styles.servicesContainer}>
          <ServiceItem
            serviceName={'Baby Glow Facial'}
            duration={'1 hour'}
            cost={100}
          />
          <ServiceItem serviceName={'BBL'} duration={'30-45 mins'} cost={420} />
        </View>
      </View>
    </View>
  );
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
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

    // padding: 20, //remove this if redundante

    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  bodyTextContainer: {
    flex: 1,
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

  bookingWithContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // flexDirection: 'row',

    // borderColor: 'green',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  providerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 5,
  },

  serviceSelectionContainer: {
    flex: 0.75,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colours.pastelturquoise,

    // borderColor: 'orange',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  carouselContinaer: {
    flexDirection: 'row',
    marginVertical: 10,

    // borderColor: 'black',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  servicesContainer: {
    flex: 3,
    paddingHorizontal: 15,

    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  boldGrey: {
    paddingLeft: 10,
    fontSize: 20,
    color: Colours.westerngrey,
    fontWeight: 800,
  },

  employee: {
    fontSize: 14,
    color: Colours.westerngrey,
    fontWeight: 800,
  },
});
