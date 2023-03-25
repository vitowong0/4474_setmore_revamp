import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {Colours} from '../constants/styles';

const SearchBar = ({query, onQueryChange, placeholder}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={onQueryChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colours.westerngrey,
    borderRadius: 8,
    margin: 8,
    paddingHorizontal: 8,
  },

  input: {
    height: 40,
  },
});
