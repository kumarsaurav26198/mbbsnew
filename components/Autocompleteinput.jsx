import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const AutoCompleteInput = ({ data, placeholder, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleQueryChange = (text) => {
    setQuery(text);
    setFilteredData(data.filter(item => item.toLowerCase().includes(text.toLowerCase())));
  };

  const handleSelect = (item) => {
    setQuery(item);
    setFilteredData([]);
    onSelect(item);
  };

  return (
    <View style={styles.autocompleteContainer}>
      <Autocomplete
        data={filteredData}
        defaultValue={query}
        onChangeText={handleQueryChange}
        placeholder={placeholder}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        flatListProps={{
          keyExtractor: (_, idx) => idx.toString(),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
});
