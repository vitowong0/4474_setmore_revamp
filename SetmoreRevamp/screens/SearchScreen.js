import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';
import CustomButton from '../components/CustomButton';
import SearchBar from '../components/SearchBar';

import ServiceInfoOverview from '../components/models/ServiceInfoOverview';
import ServiceInfo from '../components/data/ServiceInfo.json';

function SearchScreen() {
  const [query, setQuery] = useState('');

  // Perform search with new query value
  const handleQueryChange = newQuery => {
    setQuery(newQuery);
  };

  const serviceItems = ServiceInfo.map(service => {
    const serviceOverview = new ServiceInfoOverview(
      service.id,
      service.name,
      service.description,
      service.rating,
      service.services,
      service.staff,
      service.timesAvailable,
    );

    return (
      <View key={service.id}>
        <Text>{serviceOverview.name}</Text>
        <Text>{serviceOverview.description}</Text>
        <Text>Rating: {serviceOverview.rating}</Text>
        <Text>Services: {serviceOverview.services.join(', ')}</Text>
        <Text>Staff: {serviceOverview.staff.join(', ')}</Text>
        <Text>
          Times Available: {serviceOverview.timesAvailable.join(', ')}
        </Text>
      </View>
    );
  });

  return (
    // <ScrollView style={{flex: 1}}>
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Get to searching'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <SearchBar query={query} onQueryChange={handleQueryChange} />
          <CustomButton
            text="Search"
            textColour="white"
            backgroundColour={Colours.westernpurple}
            onPress={() => alert('Button pressed')}
            // onPress={setQuery(' ')}
          />
        </View>

        <View style={styles.bodyTextContainer}>
          {/* <Text style={styles.bodyText}>hi</Text> */}
          <View>{serviceItems}</View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.5,
    width: '100%',
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: Colours.darkturqouise,
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'dashed',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default SearchScreen;
