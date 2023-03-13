import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './Input';

const AddTodoForm = props => {
  const [todoText, setTodoText] = useState('');
  console.log('todoText', todoText);
  return (
    <View style={styles.addTodoWrapper}>
      <View style={styles.input}>
        <Input
          placeholder="Type your todo"
          value={todoText.text}
          setValue={text => setTodoText({...todoText, text: text})}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.addTodoButton}>
          <Text style={styles.addTodoButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
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
};

const styles = StyleSheet.create({
  addTodoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  addTodoButton: {
    borderRadius: 4,
    backgroundColor: '#5F7161',
    padding: 9,
  },
  addTodoButtonText: {
    color: '#fff',
    fontFamily: fonts.Ubuntu.bold,
  },
});

export default AddTodoForm;
