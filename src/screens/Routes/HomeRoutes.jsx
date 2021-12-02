import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


import { cores } from '../../../globalStyles';
import CadastrarHabilidade from '../CadastrarHabilidade/CadastrarHabilidade';
import ListaHabilidades from '../ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../VinculaHabilidade/VinculaHabilidade';

const drawerScreenOptions = {
    headerStyle: {
        backgroundColor: cores.azulPrimario
    }, 
    headerTintColor: '#FFF'
}

const Drawer = createDrawerNavigator();

export default function HomeRoutes() {
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
