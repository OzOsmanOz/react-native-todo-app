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
const fonts = {
  Ubuntu: {
    bold: 'Ubuntu-Bold',
    italic: 'Ubuntu-Italic',
    light: 'Ubuntu-Light',
    medium: 'Ubuntu-Medium',
    regular: 'Ubuntu-Regular',
  },
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: '#4AA3BA',
    marginVertical: 20,
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    fontFamily: fonts.Ubuntu.medium,
  },
});

export default Input;
