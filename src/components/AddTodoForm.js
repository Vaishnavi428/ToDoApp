import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() === '') {
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter a new todo"
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default connect(null, { addTodo })(AddTodoForm);
