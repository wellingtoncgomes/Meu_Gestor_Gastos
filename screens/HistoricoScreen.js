import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../utils/supabaseClient';
import GastoCard from '../components/GastoCard';
import Header from '../components/Header';
import Footer from '../components/Footer'

export default function HistoricoScreen() {
  const [gastos, setGastos] = useState([]);

  const carregarGastos = async () => {
    const { data, error } = await supabase
      .from('gastos')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setGastos(data);
    else console.error('Erro ao carregar gastos:', error.message);
  };

  useFocusEffect(
    useCallback(() => {
      carregarGastos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header titulo="Histórico de Gastos" />
      <FlatList
        data={gastos}
        renderItem={({ item }) => (
          <GastoCard
            descricao={item.descricao}
            valor={item.valor}
            categoria={item.categoria}
            tipo={item.tipo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff',padding: 40 },
  lista: { padding: 20 },
});
