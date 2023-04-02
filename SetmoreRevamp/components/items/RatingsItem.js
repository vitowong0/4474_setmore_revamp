import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import goldstar from '../../assets/icons/star.png';
import {Colours} from '../../constants/styles';

function RatingsItem({id, score, name, review}) {
  return (
    <View style={styles.ratingsItemContainer}>
      <View style={styles.topRow}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.ratingTextStar}>
          <Text style={styles.scoreText}>{score} </Text>
          <Image style={styles.star} source={goldstar} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.reviewText}>{review}</Text>
      </View>
    </View>
  );
}

export default RatingsItem;

const styles = StyleSheet.create({
  ratingsItemContainer: {
    // flex: 1,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: Colours.westerngrey,
    borderBottomWidth: 0.5,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  ratingTextStar: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },

  textContainer: {
    paddingVertical: 5,
  },

  scoreText: {
    color: 'gold',
    fontSize: 20,
    fontWeight: 800,
  },

  star: {
    width: 20,
    height: 20,
  },

  nameText: {
    fontSize: 22,
    fontWeight: 800,
    color: Colours.darkturqouise,
  },

  reviewText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colours.westerngrey,
  },
});
