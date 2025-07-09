import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
      <Footer rodape="Meu Gestor de Gastos - 2025" />
    </NavigationContainer>
  );
}

