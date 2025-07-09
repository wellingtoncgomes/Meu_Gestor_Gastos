import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NovoGastoScreen from '../screens/NovoGastoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import ResumoScreen from '../screens/ResumoScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
         headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Resumo') iconName = 'pie-chart';
          else if (route.name === 'Novo Gasto') iconName = 'add-circle';
          else if (route.name === 'Histórico') iconName = 'list';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Resumo" component={ResumoScreen} />
      <Tab.Screen name="Novo Gasto" component={NovoGastoScreen} />
      <Tab.Screen name="Histórico" component={HistoricoScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
