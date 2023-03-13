import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder, value, setValue, style}) => {
  return (
    <TextInput
      style={[styles.inputText, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: '#5F7161',
    marginVertical: 20,
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default Input;
