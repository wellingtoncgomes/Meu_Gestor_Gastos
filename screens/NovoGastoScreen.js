import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../utils/supabaseClient';
import SelectInput from '../components/SelectionInput';
import Botao from '../components/Botao';
import Header from '../components/Header';
import Footer from '../components/Footer'

export default function NovoGastoScreen({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('receita');

  const categorias = [
    { label: 'Casa', value: 'casa' },
    { label: 'Carro', value: 'carro' },
    { label: 'Mercado', value: 'mercado' },
    { label: 'Vestuário', value: 'vestuario' },
    { label: 'Alimentação', value: 'alimentacao' },
    { label: 'Venda', value: 'venda' },
    { label: 'Compra', value: 'compra' },
    { label: 'Entretenimento', value: 'entretenimento' },
    { label: 'Salario', value: 'Salario' },
  ];

  const tipos = [
    { label: 'Receita', value: 'receita' },
    { label: 'Despesa', value: 'despesa' },
  ];

  const adicionarGasto = async () => {
    if (!descricao || !valor || isNaN(parseFloat(valor))) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente');
      return;
    }

    const { error } = await supabase
      .from('gastos')
      .insert([{ descricao, valor: parseFloat(valor), categoria, tipo }]);

    if (error) {
      Alert.alert('Erro ao salvar gasto', error.message);
    } else {
      Alert.alert('Sucesso', 'Gasto salvo com sucesso!');
      setDescricao('');
      setValor('');
      setCategoria('');
      setTipo('receita');
      navigation.navigate('Histórico');
    }
  };

  return (
    <View style={styles.container}>
      <Header titulo="Gerenciamento de Gastos" />
      <Text style={styles.label}>Descrição</Text>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <SelectInput
        label="Categoria"
        selectedValue={categoria}
        onValueChange={setCategoria}
        options={categorias}
      />

      <SelectInput
        label="Tipo"
        selectedValue={tipo}
        onValueChange={setTipo}
        options={tipos}
      />
      <Botao titulo="Adicionar Gasto" onPress={adicionarGasto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
  },
});
