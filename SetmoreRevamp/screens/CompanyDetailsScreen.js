import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

function CompanyDetailsScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Details'} />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.text}>inside CompanyDetailsScreen</Text>
      </View>
    </View>
  );
}

export default CompanyDetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: Colours.darkturqouise,
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  text: {
    fontSize: 20,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },
});
