import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colours} from '../../constants/styles';

function NotificationItem({id, postImage, companyName, detailText, timeAgo}) {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity>
        <View style={styles.notificationContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={postImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.companyName}>{companyName}</Text>
            <Text style={styles.detailText}>{detailText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10,
    marginBottom: 6,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
  },

  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  image: {
    height: 75,
    width: 75,
  },

  textContainer: {
    flex: 5,
    justifyContent: 'center',

    // borderColor: 'green',
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },

  companyName: {
    fontWeight: '700',
    paddingVertical:3,
    fontSize: 12,
  },

  detailText: {
    fontWeight: '300',
    paddingVertical:3,
    fontSize: 14,
  },
});
