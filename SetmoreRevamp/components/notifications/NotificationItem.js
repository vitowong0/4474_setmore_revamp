import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colours } from "../../constants/styles";
import { NOTIFICATIONSDATA } from "../data/DummyNotificationData";
function NotificationItem({ id, postImage,  companyName, notification, time }) {
  
    return (
    <View style={styles.rootContainer}>
      <TouchableOpacity>
        <View>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.postImage}>{postImage}</Text>
            <Text style={styles.companyName}>{companyName}</Text>
            <Text style={styles.notification}>{notification}</Text>
            <Text style={styles.time}>{time}</Text>
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

    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
  },

  notifTitleText: {
    fontWeight: "600",
    fontSize: 20,
  },

  notifDetailText: {
    fontWeight: "200",
    fontSize: 15,
  },
});
