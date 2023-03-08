import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Header from '../components/headers/Header';

function SearchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <View style={styles.header}>
        <Header headerTitle={'Get to booking'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTextContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('You found this button!');
            }}>
            <Text style={styles.bodyText}>on SearchScreen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1.5,
    width: '100%',
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

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

export default SearchScreen;
