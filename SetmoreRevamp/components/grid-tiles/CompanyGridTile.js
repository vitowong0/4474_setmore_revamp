import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ServiceInfoOverview from '../models/CompanyInfoOverview';
import ServiceInfo from '../data/CompanyInfo.json';

function CompanyGridTile() {
  const navigation = useNavigation();

  const serviceItems = ServiceInfo.map(service => {
    const serviceOverview = new ServiceInfoOverview(
      service.id,
      service.name,
      service.description,
      service.rating,
      service.services,
      service.staff,
      service.timesAvailable,
      service.duration,
      service.cost,
    );

    return (
      <TouchableOpacity>
        <View style={styles.test}>
          <View key={service.id}>
            <Text>{serviceOverview.name}</Text>
            <Text>{serviceOverview.description}</Text>
            <Text>Rating: {serviceOverview.rating}</Text>
            <Text>Services: {serviceOverview.services.join(', ')}</Text>
            <Text>Staff: {serviceOverview.staff.join(', ')}</Text>
            <Text>
              Times Available: {serviceOverview.timesAvailable.join(', ')}
            </Text>
            <Text>Duration: {serviceOverview.duration.join(', ')}</Text>
            <Text>Cost: {serviceOverview.cost.join(', ')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.root}>
      <View>{serviceItems}</View>
    </View>
  );
}

export default CompanyGridTile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  serviceContainer: {
    // flex: 1,

    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  test: {
    paddingVertical: 10,
  },

  text: {
    fontSize: 20,
    color: 'green',
  },
});
