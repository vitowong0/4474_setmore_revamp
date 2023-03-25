import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {Colours} from '../constants/styles';
import HomeHeader from '../components/headers/HomeHeader';
import CustomButton from '../components/CustomButton';

import ServiceInfoOverview from '../components/models/ServiceInfoOverview';
import ServiceInfo from '../components/data/ServiceInfo.json';

import Swiper from "react-native-screens-swiper";
import ServiceInfo from '../components/data/ServiceInfo.json';
import FirstImage from '../assets/images/salon_dream.png'
import SecondImage from '../assets/images/salon_hair.png'
import ThirdImage from '../assets/images/salon_hup.png'

const HomeScreen = () => {
  const serviceItems = ServiceInfo.map(service => {
    const serviceOverview = new ServiceInfoOverview(
      service.id,
      service.name,
      service.description,
      service.rating,
      service.services,
      service.staff,
      service.timesAvailable,
    );

    return (
      <View key={service.id}>
        <Text>{serviceOverview.name}</Text>
        <Text>{serviceOverview.description}</Text>
        <Text>Rating: {serviceOverview.rating}</Text>
        <Text>Services: {serviceOverview.services.join(', ')}</Text>
        <Text>Staff: {serviceOverview.staff.join(', ')}</Text>
        <Text>
          Times Available: {serviceOverview.timesAvailable.join(', ')}
        </Text>
      </View>
    );
  });

  return (

    
    const data = [
      {
        tabLabel: 'First Image',
        componenet: FirstImage,
        props: {} // Optional properties
      },
      {
        tabLabel: 'Second Image',
        componenet: SecondImage,
        props: {} // Optional properties
      },
      {
        tabLabel: 'Third Image',
        componenet: ThirdImage,
        props: {} // Optional properties
      }
    ];

    <View style={styles.rootContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader first_name={'Gort'} />}</View>
      <View style={styles.bodyContainer}>
        <View style={styles.topContainer}>
          <Text>in top container</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="hello"
              textColour={Colours.darkturqouise}
              backgroundColour={Colours.lightgreen}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Swiper
            data={data}
            isStaticPills={true}
            style={styles}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View>{serviceItems}</View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },

  header: {
    flex: 1.5,
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
