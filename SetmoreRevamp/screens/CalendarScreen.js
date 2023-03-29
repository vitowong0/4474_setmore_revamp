import React from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Calendar from '../components/Calendar';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';

function CalendarScreen() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={"Gort's Calendar"} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTextContainer}>
          <Calendar
            width={Dimensions.get('window').width}
            daysBooked={['2023-04-02']}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
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

export default CalendarScreen;
