import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  // ScrollView,
  FlatList,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';

import Header from '../components/headers/Header';
import {Colours} from '../constants/styles';
import scanIcon from '../assets/icons/og-scan.png';

import NearbyCompanyItem from '../components/NearbyCompanyItem';
import {NEARBYCOMPANYDATA} from '../components/data/DummyNearbyCompanyData';

import MiniCompanyGridTile from '../components/grid-tiles/MiniCompanyGridTile';
import {COMPANYDATAFOUR} from '../components/data/DummyCompanyDataFour';

function SearchScreen() {
  function renderNearbyCompanyItem(itemData) {
    return (
      <NearbyCompanyItem
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.image}
        rating={itemData.item.rating}
        numReviews={itemData.item.numReviews}
        distance={itemData.item.distance}
        dollarSign={itemData.item.dollarSign}
        style={itemData.item.style}
        timesAvailable={itemData.item.timesAvailable}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Get to Booking'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search Setmore"
            onChangeText={text => console.log(text)}
          />
          <TouchableOpacity
            onPress={() => {
              alert('scan a QR code!');
            }}>
            <View>
              <Image style={styles.scanIcon} source={scanIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.topContainer}>
          <View
            style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5}}>
            <Text style={styles.nearbyText}>7 companies nearby</Text>
          </View>
          <ScrollView>
            <FlatList
              data={NEARBYCOMPANYDATA}
              keyExtractor={item => item.id}
              renderItem={renderNearbyCompanyItem}
            />
          </ScrollView>
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

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 10,
  },

  scanIcon: {
    width: 32,
    height: 32,
  },

  topContainer: {
    flex: 1,
  },

  nearbyText: {
    fontWeight: 700,
    fontSize: 18,

    color: Colours.westerngrey,
  },

  bottomContainer: {
    paddingTop: 10,
    paddingBottom: 20,

    borderColor: 'blue',
    borderWidth: 1,
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 20,

    // borderColor: 'blue',
    // borderWidth: 1,
  },

  bigGreyText: {
    fontSize: 20,
    fontWeight: 800,
    color: Colours.westerngrey,
  },

  smallGreenText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },
});

export default SearchScreen;
