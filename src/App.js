import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import TodoList from './src/components/TodoList';
import AddTodoForm from './src/components/AddTodoForm';
import DeleteAllButton from './src/components/DeleteAllButton';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoList />
        <AddTodoForm />
        <DeleteAllButton />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
