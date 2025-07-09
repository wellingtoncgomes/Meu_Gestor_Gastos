import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  botao: { 
    backgroundColor: '#7bb0a8', 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center' },
  texto: { 
    color: '#635274', 
    fontWeight: 'bold' },
});
