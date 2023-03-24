import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';
import CustomButton from '../components/CustomButton';
import SearchBar from '../components/SearchBar';

function SearchScreen() {
  const [query, setQuery] = useState('');

  // Perform search with new query value
  const handleQueryChange = newQuery => {
    setQuery(newQuery);
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Get to searching'} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTextContainer}>
          <SearchBar query={query} onQueryChange={handleQueryChange} />
          <CustomButton
            text="on searchScreen"
            textColour="white"
            backgroundColour={Colours.westernpurple}
            onPress={() => alert('Button pressed')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
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

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
