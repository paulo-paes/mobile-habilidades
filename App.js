import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Container from './src/components/Container/Container';
import Routes from './src/screens/Routes/Routes';
import UserContext from './src/context/UserContext';

export default function App() {

  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [isGestor, setGestor] = useState(false);

  return (
    <Container>
      <UserContext.Provider value={{user, setUser, authenticated, setAuthenticated, isGestor, setGestor}}>
        <Routes />
      </UserContext.Provider>
    </Container>
  );
}

