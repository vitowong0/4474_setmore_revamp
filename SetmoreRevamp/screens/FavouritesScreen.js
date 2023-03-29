import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

import CompanyGridTile from '../components/grid-tiles/CompanyGridTile';
import {COMPANYDATA} from '../components/data/DummyCompanyData';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';
import CustomButton from '../components/CustomButton';

function FavouritesScreen() {
  function renderCompanyGridTile(itemData) {
    return (
      <CompanyGridTile
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
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Favourites'} />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={COMPANYDATA}
          keyExtractor={item => item.id}
          renderItem={renderCompanyGridTile}
          numColumns={1}
        />
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
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: 'white',

    // borderColor: Colours.darkturqouise,
    // borderWidth: 1,
    // borderStyle: 'dashed',
  },
});

export default FavouritesScreen;
