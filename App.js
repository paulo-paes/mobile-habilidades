import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/components/container/Container';
import Routes from './src/screens/Routes/Routes';

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

