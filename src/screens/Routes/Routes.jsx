import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro';
import EsqueciSenha from '../EsqueciSenha/EsqueciSenha';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen 
          name="EsqueciSenha" 
          component={EsqueciSenha} 
          options={{title: "Esqueci minha senha"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};