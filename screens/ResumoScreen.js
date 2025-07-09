import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../utils/supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer'
import ResumoFinanceiro from '../components/ResumoFinanceiro';

export default function ResumoScreen() {
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [despesasPorCategoria, setDespesasPorCategoria] = useState([]);
  const [receitasPorCategoria, setReceitasPorCategoria] = useState([]);

  const carregarTotais = async () => {
    const { data: gastos } = await supabase.from('gastos').select('*');
    if (!gastos) return;

    const totalReceitas = gastos.filter(g => g.tipo === 'receita').reduce((acc, g) => acc + g.valor, 0);
    const totalDespesas = gastos.filter(g => g.tipo === 'despesa').reduce((acc, g) => acc + g.valor, 0);
    setReceitas(totalReceitas);
    setDespesas(totalDespesas);

    // Função para agrupar
    const agrupar = tipo => {
      const map = {};
      gastos.filter(g => g.tipo === tipo).forEach(g => {
        map[g.categoria] = (map[g.categoria] || 0) + g.valor;
      });
      const cores = ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A', '#BA68C8', '#FFA726', '#26C6DA'];
      return Object.entries(map).map(([cat, valor], idx) => ({
        name: cat,
        value: valor,
        color: cores[idx % cores.length],
        legendFontColor: '#333',
        legendFontSize: 14,
      }));
    };

    setDespesasPorCategoria(agrupar('despesa'));
    setReceitasPorCategoria(agrupar('receita'));
  };

  useFocusEffect(
    useCallback(() => {
      carregarTotais();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header titulo="Resumo" />
      <ResumoFinanceiro
        receitas={receitas}
        despesas={despesas}
        despesasPorCategoria={despesasPorCategoria}
        receitasPorCategoria={receitasPorCategoria}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40 }
});
