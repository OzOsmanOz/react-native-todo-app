import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AddTodoForm from './src/components/AddTodoForm';
import Header from './src/components/Header';
import Input from './src/components/Input';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <View>
        <AddTodoForm />
      </View>
    </SafeAreaView>
  );
}

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
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: fonts.Ubuntu.bold,
  },
});

export default App;
