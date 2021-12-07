import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Container from './src/components/Container/Container';
import Routes from './src/screens/Routes/Routes';
import UserContext from './src/context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from './src/api/service';
import { cores } from './globalStyles';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';

export default function App() {

  const [user, setUserData] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [isGestor, setGestor] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataFromStorage()
  }, [])

  async function getDataFromStorage(){
    try {
      const [[_, userStorage], [__, tokenStorage]] = await AsyncStorage.multiGet(['user', 'token'])
      if(userStorage !== null){
        const userParsed = JSON.parse(userStorage)
        setUserData(userParsed)
        API.setAuthToken(tokenStorage)
        setAuthenticated(true)
        setGestor(userParsed.role === 'gestor')
        setToken(token)
        
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  function loginUser(user, token){
    if(user && token){
      AsyncStorage.multiSet([['user', JSON.stringify(user)], ['token', token]])
      setUserData(user)
      setAuthenticated(true)
      setGestor(user.role === 'gestor')
    }
  }

  function logoutUser(){
    setUserData({})
    setAuthenticated(false)
    setGestor(false)
    API.deleteToken()
    AsyncStorage.multiRemove(['user', 'token'])
  }

  return (
    <Container>
      <UserContext.Provider value={{user, loginUser, authenticated, setAuthenticated, isGestor, setGestor, token, setToken, logoutUser}}>
      {
        loading ? (
          <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' animating={true} color={cores.azulPrimario} style={{alignSelf: 'center'}} />
          </View>
        ) : (
          <Routes />
        )
      }
      </UserContext.Provider>
    </Container>
  );
}

