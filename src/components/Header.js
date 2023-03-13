import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Todo App </Text>
    </View>
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
  Raleway: {
    bold: 'Raleway-Bold',
    semiBold: 'Raleway-SemiBold',
    italic: 'Raleway-Italic',
    light: 'Raleway-Light',
    medium: 'Raleway-Medium',
    regular: 'Raleway-Regular',
  },
  Montserrat: {
    bold: 'Montserrat-Bold',
    extraBold: 'Montserrat-ExtraBold',
    semiBold: 'Montserrat-SemiBold',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
  },
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#5F7161',
    marginHorizontal: 50,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: fonts.Ubuntu.bold,
  },
});

export default Header;
