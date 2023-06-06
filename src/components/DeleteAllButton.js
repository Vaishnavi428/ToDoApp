import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deleteAllTodos } from '../actions';

const DeleteAllButton = ({ deleteAllTodos }) => {
  return (
    <View style={styles.container}>
      <Button title="Delete All" onPress={deleteAllTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default connect(null, { deleteAllTodos })(DeleteAllButton);
