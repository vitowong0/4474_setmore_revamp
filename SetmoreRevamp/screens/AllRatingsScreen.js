import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

import StaffItem from '../components/items/StaffItem';
import {STAFFDATA} from '../components/data/DummyStaff';

function AllRatingsScreen() {
  const navigation = useNavigation();

  function renderStaffItem(itemData) {
    return (
      <StaffItem
        id={itemData.item.id}
        staffPhoto={itemData.item.staffPhoto}
        staffName={itemData.item.staffName}
      />
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'All ratings'} />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={STAFFDATA}
          keyExtractor={item => item.id}
          renderItem={renderStaffItem}
          numColumns={1}
        />
      </View>
    </View>
  );
}

export default AllRatingsScreen;

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
    paddingHorizontal: 20,

    borderTopWidth: 1,
    borderTopColor: 'red',
  },
});
