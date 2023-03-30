import React from 'react';
import {Text, View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Calendar from '../components/Calendar';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';

function CalendarScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Calendar'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.legendContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.miniCircleBorder} />
            <Text style={styles.legendText}>Available</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.miniCirclePink} />
            <Text style={styles.legendText}>Booked</Text>
          </View>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            width={Dimensions.get('window').width}
            daysBooked={[
              '2023-01-15',
              '2023-02-24',
              '2023-02-14',
              '2023-02-28',
              '2023-03-01',
              '2023-03-10',
              '2023-03-29',
              '2023-03-30',
              '2023-04-01',
              '2023-04-02',
              '2023-04-13',
            ]}
          />
        </View>
        <View style={styles.bookedAppointments}>
          <Text>Next appointment: Thursday March 30, 2023 at 4:20 PM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    width: '100%',
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: 'red',
    borderTopWidth: 1,
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,

    // borderColor: 'green',
    // borderWidth: 1,
  },

  miniCirclePink: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: Colours.pastelpink,
  },

  miniCircleBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.25,
    marginHorizontal: 5,
    borderColor: Colours.mediumgrey,
  },

  calendarContainer: {
    // flex: 1,
    // marginHorizontal: 20,
  },

  bookedAppointments: {
    flex: 1,
    borderColor: 'red',
    borderTopWidth: 1,
  },
});

export default CalendarScreen;
