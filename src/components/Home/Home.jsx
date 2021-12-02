import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { cores } from '../../../globalStyles';
import CadastrarHabilidade from '../../screens/CadastrarHabilidade/CadastrarHabilidade';
import ListaHabilidades from '../../screens/ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../../screens/VinculaHabilidade/VinculaHabilidade';

const Drawer = createDrawerNavigator();

const drawerScreenOptions = {
    headerStyle: {
        backgroundColor: cores.azulPrimario
    }, 
    headerTintColor: '#FFF'
}

export default function Home() {
    return (
        <Drawer.Navigator initialRouteName="Habilidades" screenOptions={drawerScreenOptions}>
            <Drawer.Screen name="Habilidades" component={ListaHabilidades} />
            <Drawer.Screen name="Cadastrar Habilidade" component={CadastrarHabilidade} />
            <Drawer.Screen name="Vincular Habilidade" component={VinculaHabilidade} />
        </Drawer.Navigator>
    )
}
