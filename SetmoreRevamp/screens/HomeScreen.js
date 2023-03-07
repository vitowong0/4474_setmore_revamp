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
        <View style={styles.bodyTextContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('You found this button!');
            }}>
            <Text style={styles.bodyText}>on HomeScreen</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    width: '100%',
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: 'red',
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'green',
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
