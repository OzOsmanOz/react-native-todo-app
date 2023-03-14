import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Input from './Input';

const AddTodoForm = props => {
  const {todos, setTodos} = props;
  const [todoText, setTodoText] = useState({
    id: String(new Date().getTime()),
    text: '',
    isDone: false,
  });

  const handleSubmit = () => {
    if (!todoText.text) {
      Alert.alert('Warning', "Todo text can't be empty", [{text: 'Close'}]);
      return;
    }

    const hasTodo = todos.find(todo => todo.text === todoText.text);

    if (hasTodo) {
      Alert.alert('Warning', 'There is a task with the same name', [
        {text: 'Close'},
      ]);
      return;
    }
    setTodos([...todos, todoText]);
    setTodoText('');

    setTodoText({
      id: String(new Date().getTime()),
      text: '',
      isDone: false,
    });
  };
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
        <TouchableOpacity onPress={handleSubmit} style={styles.addTodoButton}>
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
    backgroundColor: '#4AA3BA',
    padding: 9,
  },
  addTodoButtonText: {
    color: '#fff',
    fontFamily: fonts.Ubuntu.bold,
  },
});

export default AddTodoForm;
