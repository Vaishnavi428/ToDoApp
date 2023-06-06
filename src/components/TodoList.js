import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <View>
      {todos.length === 0 ? (
        <Text>No todos found</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={() => toggleTodo(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo })(TodoList);
