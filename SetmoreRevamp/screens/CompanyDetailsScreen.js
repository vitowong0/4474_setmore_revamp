import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

import salon1 from '../assets/images/salon1.png';
import profilePic1 from '../assets/images/boywhatthehell.png';
import profilePic2 from '../assets/images/liv.png';
import profilePic3 from '../assets/images/briar.png';

function CompanyDetailsScreen({
  name,
  image,
  description,
  rating,
  services,
  staff,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Company Details'} />
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Image style={styles.image} source={salon1} />
          <View style={styles.aboutDescriptionContainer}>
            <Text style={styles.headerText}>About</Text>
            <Text style={styles.descriptionText}>
              A café, a restaurant, a spa, an apothecary. Linnaean is a
              multi-hyphenate gathering place for the surrounding neighbourhood
              in Nine Elms and beyond. {description}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.headerText}>Ratings</Text>
              <Text style={styles.ratingNumberText}>4.5{rating}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('bringing you to all ratings page');
                }}>
                <Text style={styles.headerText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.byStaffContainer}>
            <Text style={styles.headerText}>Book by staff</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingScreen')}>
                <View style={styles.staffImageTextContainer}>
                  <Image style={styles.profileImage} source={profilePic1} />
                  <Text style={styles.staffName}>Xiaoyun</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingScreen')}>
                <View style={styles.staffImageTextContainer}>
                  <Image style={styles.profileImage} source={profilePic2} />
                  <Text style={styles.staffName}>Liv</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingScreen')}>
                <View style={styles.staffImageTextContainer}>
                  <Image style={styles.profileImage} source={profilePic3} />
                  <Text style={styles.staffName}>Briar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    marginBottom: -10,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,
    padding: 20,

    borderColor: 'red',
    borderTopWidth: 1,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 30,
  },

  aboutDescriptionContainer: {
    paddingVertical: 15,
  },

  headerText: {
    fontSize: 22,
    fontWeight: 700,
    color: Colours.westerngrey,
  },

  descriptionText: {
    paddingTop: 5,
    fontSize: 14,
  },

  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: 15,

    justifyContent: 'space-between',
  },

  ratingNumberText: {
    fontSize: 22,
    fontWeight: 700,
    color: 'gold',
    paddingLeft: 15,
  },

  byStaffContainer: {
    paddingVertical: 15,
  },

  staffImageTextContainer: {
    paddingTop: 20,
    paddingRight: 20,
    alignItems: 'center',
  },

  profileImage: {
    width: 90,
    height: 90,
  },

  staffName: {
    paddingTop: 5,
    fontWeight: 600,
    color: Colours.westerngrey,
  },
});
