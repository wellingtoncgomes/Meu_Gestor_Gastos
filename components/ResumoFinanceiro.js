import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function ResumoFinanceiro({ receitas, despesas, despesasPorCategoria, receitasPorCategoria }) {
  const saldo = receitas - despesas;
  const chartWidth = Dimensions.get('window').width - 64;

  return (
    <View style={styles.container}>
      <View style={styles.indicadores}>
        <Text style={styles.texto}>Receitas: R$ {receitas.toFixed(2)}</Text>
        <Text style={styles.texto}>Despesas: R$ {despesas.toFixed(2)}</Text>
        <Text style={[styles.saldo, saldo >= 0 ? styles.verde : styles.vermelho]}>Saldo: R$ {saldo.toFixed(2)}</Text>
      </View>

      <Text style={styles.tituloGrafico}>Despesas por Categoria</Text>
      {despesasPorCategoria.length > 0 ? (
        <PieChart
          data={despesasPorCategoria}
          width={chartWidth}
          height={200}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          chartConfig={{ color: () => `#000`, labelColor: () => '#333' }}
        />
      ) : (
        <Text style={styles.semDados}>Nenhuma despesa registrada</Text>
      )}

      <Text style={styles.tituloGrafico}>Receitas por Categoria</Text>
      {receitasPorCategoria.length > 0 ? (
        <PieChart
          data={receitasPorCategoria}
          width={chartWidth}
          height={200}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          chartConfig={{ color: () => `#000`, labelColor: () => '#333' }}
        />
      ) : (
        <Text style={styles.semDados}>Nenhuma receita registrada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#f1f2f6', 
    borderRadius: 8, 
    padding: 16, 
    marginVertical: 16 },
  indicadores: { 
    marginBottom: 16 },
  texto: { 
    fontSize: 16,
     marginBottom: 4
      },
  saldo: { 
    fontSize: 18, 
    fontWeight: 'bold' 
    },
  verde: { color: 'green' },
  vermelho: { color: 'red' },
  tituloGrafico: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 12, 
    marginBottom: 8, 
    alignSelf: 'center' },
  semDados: { 
    color: '#888', 
    fontSize: 14, 
    alignSelf: 'center', 
    marginBottom: 16 },
});