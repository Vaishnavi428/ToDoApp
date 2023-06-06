import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <Text
        style={[
          styles.text,
          todo.completed ? styles.completedText : null,
        ]}
      >
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
