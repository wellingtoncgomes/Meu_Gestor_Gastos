import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Botao from '../components/Botao';
import Avatar from '../components/Avatar';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../utils/supabaseClient';

export default function PerfilScreen() {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    carregarPerfil();
  }, []);

  const carregarPerfil = async () => {
    const { data, error } = await supabase
      .from('perfil')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Erro ao carregar perfil:', error.message);
      Alert.alert('Erro ao carregar perfil');
    } else if (data) {
      setId(data.id);
      setNome(data.nome);
      setEmail(data.email);
      setAvatar(data.avatar);
    } else {
      const randomAvatar = `https://i.pravatar.cc/200?rand=${Math.random()}`;
      setAvatar(randomAvatar);
    }
  };

  const salvarPerfil = async () => {
    const perfilData = { nome, email, avatar };

    if (id) {
      perfilData.id = id;
    }

    const { data, error } = await supabase
      .from('perfil')
      .upsert(perfilData)
      .select()
      .maybeSingle();

    if (error) {
      console.error('Erro ao salvar perfil:', error.message);
      Alert.alert('Erro ao salvar perfil');
    } else {
      Alert.alert('Perfil salvo com sucesso!');
      if (data?.id) setId(data.id); 
    }
  };

  return (
    <View style={styles.container}>
      <Header titulo="Perfil" />
      <View style={styles.conteudo}>
        <Avatar uri={avatar} />
        <Input placeholder="Nome" value={nome} onChangeText={setNome} />
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Botao titulo="Salvar Perfil" onPress={salvarPerfil} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  conteudo: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});

