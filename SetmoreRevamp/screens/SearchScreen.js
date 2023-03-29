import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/headers/Header';
import CompanyGridTile from '../components/grid-tiles/CompanyGridTile';
import {Colours} from '../constants/styles';
import scanIcon from '../assets/icons/squared-scan.png';

function SearchScreen() {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Start searching'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search for anything"
            onChangeText={text => console.log(text)}
          />
          <TouchableOpacity>
            <View>
              <Image style={styles.scanIcon} source={scanIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bodyTextContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BookingScreen');
            }}>
            <Text style={styles.bodyText}>Gort Salon</Text>
            <Text>(going to BookingScreen. everything is hardcoded)</Text>
          </TouchableOpacity>
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
  },

  scanIcon: {
    width: 32,
    height: 32,
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    //   borderColor: 'orange',
    //   borderWidth: 1,
    //   borderStyle: 'dashed',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default SearchScreen;
