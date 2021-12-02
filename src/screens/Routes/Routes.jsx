import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro';
import EsqueciSenha from '../EsqueciSenha/EsqueciSenha';
import ListaHabilidades from '../ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../VinculaHabilidade/VinculaHabilidade';
import CadastrarHabilidade from '../CadastrarHabilidade/CadastrarHabilidade';
import { cores } from '../../../globalStyles';
import Home from '../../components/Home/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="EsqueciSenha" 
          component={EsqueciSenha} 
          options={{title: "Esqueci minha senha", headerShown: true, headerStyle: {backgroundColor: cores.azulPrimario}, headerTintColor: '#FFF'}}
          
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{title: "Home", headerShown: false}}
          
        />
        {/* <Stack.Screen 
          name="ListaHabilidades" 
          component={ListaHabilidades} 
          options={{title: "Habilidades", headerShown: false}}
        />
        <Stack.Screen 
          name="VinculaHabilidade" 
          component={VinculaHabilidade} 
          options={{title: "Vincula Habilidade", headerShown: false}}
        />
        <Stack.Screen 
          name="CadastrarHabilidade" 
          component={CadastrarHabilidade} 
          options={{title: "Cadastrar Habilidade", headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};