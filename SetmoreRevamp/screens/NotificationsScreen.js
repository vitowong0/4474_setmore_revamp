import { StyleSheet, View, StatusBar, FlatList, TouchableOpacity, Text} from "react-native";


import NotificationItem from '../components/notifications/NotificationItem';
import { NOTIFICATIONSDATA } from '../components/data/DummyNotificationData';
import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';
import CustomButton from '../components/CustomButton';

function NotificationsScreen() {
    function renderNotificationItem(itemData) {
      return (
        <NotificationItem
          titleText={itemData.item.title}
          detailText={itemData.item.detail}
        />
      );
    }
    
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Notifications'} />
      </View>
      {/* <View style={styles.bodyContainer}> */}
        {/* <View style={styles.bodyTextContainer}> */}
          {/* <TouchableOpacity
            onPress={() => {
              alert('eat my capy');
            }}>
            <Text style={styles.bodyText}>on NotificationsScreen</Text>
          </TouchableOpacity> */}
        
         
    {/* <View style={styles.container}> */}
      <View style={styles.bodyContainer}>
        <FlatList
          data={NOTIFICATIONSDATA}
          keyExtractor={(item) => item.id}
          renderItem={NotificationItem}
          numColumns={1}
        />
      </View>
    {/* </View> */}
        {/* <NotificationItem companyName={'Capy'}/> */}

        </View>
      // </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
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
});

export default NotificationsScreen;
