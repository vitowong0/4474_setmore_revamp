import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/headers/Header';
import {Colours} from '../constants/styles';
import scanIcon from '../assets/icons/og-scan.png';

import MiniCompanyGridTile from '../components/grid-tiles/MiniCompanyGridTile';
import {COMPANYDATAFOUR} from '../components/data/DummyCompanyDataFour';

function SearchScreen() {
  function renderMiniCompanyGridTile(itemData) {
    return (
      <MiniCompanyGridTile
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.image}
        description={itemData.item.description}
        rating={itemData.item.rating}
        services={itemData.item.services}
        staff={itemData.item.staff}
        timesAvailable={itemData.item.timesAvailable}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
        heartIcon={itemData.item.heartIcon}
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
          <Text>um hi</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={(style = styles.topTextContainer)}>
            <Text style={styles.bigGreyText}>Recommended for you</Text>
            <TouchableOpacity
              onPress={() => {
                alert('bringing you to View all page');
              }}>
              <Text style={styles.smallGreenText}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            scrollEventThrottle={200}
            decelerationRate={'normal'}>
            <FlatList
              data={COMPANYDATAFOUR}
              keyExtractor={item => item.id}
              renderItem={renderMiniCompanyGridTile}
              numColumns={4}
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
