import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colours} from '../../constants/styles';

function NotificationItem({id, postImage, companyName, detailText}) {
  return (
    <View style={styles.root}>
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
  root: {
    flex: 1,
  },

  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    marginHorizontal: 6,
    paddingVertical: 15,

    borderColor: Colours.westerngrey,
    borderBottomWidth: 0.45,
  },

  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 75,
    width: 75,
  },

  textContainer: {
    flex: 5,
    justifyContent: 'center',
  },

  companyName: {
    fontWeight: '700',
    paddingVertical: 3,
    fontSize: 12,
  },

  detailText: {
    fontWeight: '300',
    paddingVertical: 3,
    fontSize: 14,
  },
});
