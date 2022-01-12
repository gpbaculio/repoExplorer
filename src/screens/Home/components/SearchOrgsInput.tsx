import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface SearchOrgsInputProps {
  text: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchOrgsInput = ({text, onChangeText}: SearchOrgsInputProps) => (
  <TextInput
    style={styles.textInput}
    onChangeText={onChangeText}
    value={text}
    placeholder="Lookup Github Organizations..."
    placeholderTextColor="#868f99"
  />
);

export default SearchOrgsInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#161B22',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#30363d',
    borderWidth: 1,
    borderRadius: 4,
    color: '#ffffff',
    fontSize: 12,
  },
});
