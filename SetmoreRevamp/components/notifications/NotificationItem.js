import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colours} from '../../constants/styles';

function NotificationItem({id, postImage, companyName, detailText, timeAgo}) {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Text style={styles.postImage}>{postImage}</Text>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.detailText}>{detailText}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
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

  itemContainer: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,

    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },

  companyName: {
    fontWeight: '600',
    fontSize: 20,
  },

  detailText: {
    fontWeight: '200',
    fontSize: 15,
  },
});
