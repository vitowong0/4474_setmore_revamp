import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

function TimesAvailableScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Times Available'} />
      </View>
      <View style={styles.bodyContainer}>
        <Text>in body</Text>
      </View>
    </View>
  );
}

export default TimesAvailableScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,

    borderTopWidth: 1,
    borderTopColor: 'red',
  },
});
