import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AddTodoForm from './src/components/AddTodoForm';
import Header from './src/components/Header';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = id => {
    const filteredDelete = todos.filter(todo => todo.id !== id);
    const deleteTodoFind = todos.find(todo => todo.id === id);
    Alert.alert(`${deleteTodoFind.text}`, 'silmek istediğine emin misin?', [
      {text: 'Delete', onPress: () => setTodos(filteredDelete)},
      {text: 'Close'},
    ]);
  };

  const changeIsDone = id => {
    const findChange = todos.find(todo => todo.id === id);
    console.log('findChange', findChange);
    // console.log('todos', todos);
    const changedTodo = {
      ...findChange,
      isDone: !findChange.isDone,
    };
    const filteredChange = todos.filter(todo => todo.id !== id);
    setTodos([...filteredChange, changedTodo]);
  };

  return (
    <SafeAreaView>
      <Header />
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <View>
        {todos.length === 0 ? (
          <View>
            <Text style={styles.todosText}>You do not have a todo yet</Text>
          </View>
        ) : (
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={[
                  styles.todosWrapper,
                  {
                    backgroundColor: item.isDone ? '#fff' : '#B2B2B2',
                  },
                ]}>
                <View style={styles.todosTextWrapper}>
                  <Text
                    style={[
                      styles.todosText,
                      {
                        color: item.isDone ? '#000' : '#fff',
                      },
                    ]}>
                    {item.text}
                  </Text>
                </View>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    style={[styles.todosButton, styles.todosButtonEdit]}>
                    <Text style={styles.todosButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                    style={[styles.todosButton, styles.todosButtonDelete]}>
                    <Text style={styles.todosButtonText}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => changeIsDone(item.id)}
                    style={[
                      styles.todosButton,
                      styles.todosButtonIsDone,
                      {
                        backgroundColor: item.isDone ? '#B2B2B2' : '#fff',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.todosButtonText,
                        {
                          color: item.isDone ? '#fff' : '#000',
                        },
                      ]}>
                      {item.isDone ? 'Done' : 'UnDone'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
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
  todosWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 3,
    marginHorizontal: 5,
    borderRadius: 4,
    marginVertical: 5,
  },
  todosTextWrapper: {
    paddingHorizontal: 2,
  },
  todosText: {
    fontFamily: fonts.Ubuntu.medium,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 3,
  },
  todosButton: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  todosButtonEdit: {
    backgroundColor: '#658864',
  },
  todosButtonDelete: {
    backgroundColor: '#DA5C53',
  },
  todosButtonIsDone: {
    backgroundColor: '#B2B2B2',
  },
  todosButtonText: {
    fontFamily: fonts.Ubuntu.medium,
    color: '#fff',
  },
});

export default App;
