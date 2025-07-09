import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ titulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     padding: 16, 
     backgroundColor: '#512b52'
      },
  text: { 
    color: '#a7dbab', 
    fontSize: 20, 
    fontWeight: 'bold' 
    },
});
