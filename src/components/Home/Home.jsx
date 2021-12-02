import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import React from 'react'
import { cores } from '../../../globalStyles';
import CadastrarHabilidade from '../../screens/CadastrarHabilidade/CadastrarHabilidade';
import ListaHabilidades from '../../screens/ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../../screens/VinculaHabilidade/VinculaHabilidade';

import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const drawerScreenOptions = {
    headerStyle: {
        backgroundColor: cores.azulPrimario
    }, 
    headerTintColor: '#FFF'
}

export default function Home({navigation}) {
    return (
        <Drawer.Navigator 
            initialRouteName="Habilidades" 
            screenOptions={drawerScreenOptions}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen name="Habilidades" component={ListaHabilidades} />
            <Drawer.Screen name="Cadastrar Habilidade" component={CadastrarHabilidade} />
            <Drawer.Screen name="Vincular Habilidade" component={VinculaHabilidade} />
            
        </Drawer.Navigator>
    )
}


  
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Logout"
            onPress={() => props.navigation.navigate('Login')}
        />
      </DrawerContentScrollView>
    );
  }
