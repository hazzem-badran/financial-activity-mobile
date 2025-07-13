import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Create() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});