import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import starIcon from '../assets/icons/star.png';
import locationIcon from '../assets/icons/location-icon.png';
import {Colours} from '../constants/styles';

function NearbyCompanyItem({
  id,
  name,
  image,
  rating,
  numReviews,
  distance,
  dollarSign,
  style,
  timesAvailable,
}) {
  function renderTimeButton(time) {
    return (
      <TouchableOpacity key={time} onPress={() => console.log(time)}>
        <View style={styles.individualTime}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderTimeButtons(timesAvailable) {
    return timesAvailable.map(time => renderTimeButton(time));
  }

  return (
    <View style={styles.nearbyCompanyContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.ratingContainer}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text>{rating}</Text>
            <Image style={styles.littleIcons} source={starIcon} />
          </View>
          {/* <View style={{flex: 0.1}}></View> */}
          <Text>{numReviews}</Text>
        </View>

        <View style={styles.distanceContainer}>
          <Image style={styles.littleIcons} source={locationIcon} />
          <Text>{distance}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text>{dollarSign}</Text>
          <Text>{style}</Text>
        </View>

        <View style={styles.timesContainer}>
          <Text>{renderTimeButtons(timesAvailable)}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image style={styles.companyImage} source={image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NearbyCompanyItem;

const styles = StyleSheet.create({
  nearbyCompanyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 18,
    marginTop: 10,

    borderColor: 'red',
    borderWidth: 1,
  },

  ratingContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 2,
  },

  distanceContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'center',
  },

  priceContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: 2,
  },

  timesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  individualTime: {
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: Colours.darkturqouise,
    borderRadius: 7,

    // borderColor: 'red',
    // borderWidth: 1,
  },

  timeText: {
    fontSize: 13,
    fontWeight: 700,
    color: Colours.white,
  },

  leftContainer: {
    // flex: 1,
    // borderColor: 'green',
    // borderWidth: 1,
  },

  name: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 4,
  },

  littleIcons: {
    width: 12,
    height: 12,
  },

  rightContainer: {
    // borderColor: 'purple',
    // borderWidth: 1,
  },

  companyImage: {
    width: 115,
    height: 115,

    borderRadius: 30,
  },
});
