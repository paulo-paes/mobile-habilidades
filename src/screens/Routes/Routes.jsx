import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro';
import EsqueciSenha from '../EsqueciSenha/EsqueciSenha';
import { cores } from '../../../globalStyles';

import HomeRoutes from './HomeRoutes';
import UserContext from '../../context/UserContext';
import VinculaHabilidade from '../VinculaHabilidade/VinculaHabilidade';

const Stack = createNativeStackNavigator();

export default function Routes() {

  const {authenticated} = useContext(UserContext)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: cores.azulPrimario}, headerTintColor: '#FFF'}}>

        {
          authenticated ? (
          <>
            <Stack.Screen 
              name="Home" 
              component={HomeRoutes} 
              options={{title: "Home", headerShown: false}}
            />
            <Stack.Screen
              name="VinculaHabilidade"
              component={VinculaHabilidade}
              options={{ title: 'Vincular Habilidade'}}
            />
          </>
            ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Cadastro" 
              component={Cadastro} 
            />
            <Stack.Screen 
              name="EsqueciSenha" 
              component={EsqueciSenha} 
              options={{title: "Esqueci minha senha"}}
              
            />
          </>)

        }
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};