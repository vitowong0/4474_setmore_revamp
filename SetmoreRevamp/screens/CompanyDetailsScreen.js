import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

import StaffItem from '../components/StaffItem';
import {STAFFDATA} from '../components/data/DummyStaff';

import salon1 from '../assets/images/place-A7.png';
import star from '../assets/icons/star.png';

function CompanyDetailsScreen({
  route,
  name,
  image,
  description,
  rating,
  services,
  staff,
}) {
  const navigation = useNavigation();

  function renderStaffItem(itemData) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookingScreen');
          console.log(`SELECTED STAFF: ${itemData.item.staffName}`);
        }}>
        <StaffItem
          id={itemData.item.id}
          staffPhoto={itemData.item.staffPhoto}
          staffName={itemData.item.staffName}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Company Details'} />
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={salon1} />
          </View>
          <View style={styles.aboutDescriptionContainer}>
            <Text style={styles.headerText}>About</Text>
            <Text style={styles.descriptionText}>
              A café, a restaurant, a spa, an apothecary. Linnaean is a
              multi-hyphenate gathering place for the surrounding neighbourhood
              in Nine Elms and beyond. {description}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.headerText}>Ratings</Text>
              <Text style={styles.ratingNumberText}>4.5{rating}</Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 3, marginBottom: 2}}
                source={star}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('bringing you to all ratings page');
                }}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.byStaffContainer}>
            <View style={styles.byStaffTextContainer}>
              <Text style={styles.headerText}>Book by staff</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('bringing you to all staff page');
                }}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate={'normal'}>
                <FlatList
                  data={STAFFDATA}
                  keyExtractor={item => item.id}
                  renderItem={renderStaffItem}
                  numColumns={4}
                />
              </ScrollView>
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
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,
    // padding: 20,

    borderColor: 'red',
    borderTopWidth: 1,
  },

  imageContainer: {
    padding: 20,
  },

  image: {
    width: '100%',
    height: 225,
    borderRadius: 30,
  },

  aboutDescriptionContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
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

  viewAllText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.westerngrey,
  },

  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
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

  byStaffTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  staffImageTextContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
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
