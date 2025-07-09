import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GastoCard({ descricao, valor, categoria, tipo }) {
  return (
    <View style={[styles.card, tipo === 'receita' ? styles.verde : styles.vermelho]}>
      <Text style={styles.descricao}>Descrição: {descricao}</Text>
      <Text style={styles.categoria}>Categoria: {categoria}</Text>
      <Text style={styles.valor}>R$ {valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 8, marginBottom: 12 },
  verde: { backgroundColor: '#d4fcd4' },
  vermelho: { backgroundColor: '#fdd4d4' },
  descricao: { fontWeight: '#fdd4d4' },
  valor: { fontSize: 16, fontWeight: 'bold' },
  categoria: { fontStyle: 'italic' },
});