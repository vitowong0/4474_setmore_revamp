import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {Colours} from '../constants/styles';
import SubHeader from '../components/headers/SubHeader';
import CustomButton from '../components/CustomButton';
import ServiceItem from '../components/ServiceItem';
import staff from '../assets/images/briar.png';

import SelectServiceItem from '../components/SelectServiceItem';
import {SERVICESDATA} from '../components/data/DummyServices';

function BookingScreen() {
  function renderSelectServiceItem(itemData) {
    return (
      <TouchableOpacity>
        <SelectServiceItem
          id={itemData.item.id}
          serviceName={itemData.item.serviceName}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <SubHeader headerTitle={'Booking Screen'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bookingWithContainer}>
          <Text style={styles.boldGrey}>Booking with:</Text>
          <View style={styles.imageAndTextContainer}>
            <View>
              <View style={{alignItems: 'center'}}>
                <Image source={staff} style={styles.staffImage} />
                <Text style={styles.employee}>Briar</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.serviceSelectionContainer}>
          <Text style={styles.boldGrey}>Select services</Text>
          <View style={styles.carouselContainer}>
            <ScrollView horizontal={true}>
              <FlatList
                data={SERVICESDATA}
                keyExtractor={item => item.id}
                renderItem={renderSelectServiceItem}
                numColumns={5}
              />
            </ScrollView>
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
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderTopColor: 'red',
    borderTopWidth: 1,
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
    flex: 0.75,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colours.pastelturquoise,
  },

  carouselContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  servicesContainer: {
    flex: 3,
    paddingHorizontal: 15,
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
