import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Colours} from '../constants/styles';

const ServiceItem = ({serviceName, duration, cost}) => {
  return (
    <TouchableOpacity>
      <View style={styles.root}>
        {/* <View style={styles.button}></View> */}
        {/* <View style={{alignItems: 'center'}}> */}
        <View>
          <Text style={styles.serviceName}>{serviceName}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <View>
          <Text style={styles.cost}>${cost}</Text>
        </View>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,

    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  button: {
    borderWidth: 1,
    borderRadius: 13,
    width: 26,
    height: 26,
  },

  serviceName: {
    color: Colours.darkturqouise,
    fontWeight: 800,
  },

  duration: {
    color: Colours.westerngrey,
  },

  cost: {
    fontWeight: 700,
    color: Colours.lightturqouise,
  },
});
