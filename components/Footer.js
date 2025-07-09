import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ rodape }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{rodape}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#512b52',
    alignItems: 'center',
  },
  text: {
    color: '#a7dbab',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
