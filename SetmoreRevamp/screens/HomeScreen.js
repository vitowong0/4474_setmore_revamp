import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import HomeHeader from '../components/headers/HomeHeader';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader />}</View>
      <View style={styles.bodyContainer}>
        <View style={styles.topContainer}>
          <Text>upper container</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text>bottom container</Text>
        </View>

        {/* <View style={styles.bodyTextContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('You found this button!');
            }}>
            <Text style={styles.bodyText}>on HomeScreen</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  header: {
    flex: 1.5,
    width: '100%',
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  topContainer: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
  },

  bottomContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'purple',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
