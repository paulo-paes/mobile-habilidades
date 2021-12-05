import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


import { cores } from '../../../globalStyles';
import CadastrarHabilidade from '../CadastrarHabilidade/CadastrarHabilidade';
import ListaHabilidades from '../ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../VinculaHabilidade/VinculaHabilidade';
import ListaUsuarios from '../ListaUsuarios/ListaUsuarios';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import UserContext from '../../context/UserContext';
import DrawerContent from '../../components/DrawerContent/DrawerContent';

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
            initialRouteName="Usuarios" 
            screenOptions={drawerScreenOptions}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Perfil" component={PerfilUsuario} />
            <Drawer.Screen name="Usuarios" component={ListaUsuarios} options={{title: 'Home'}}/>
            <Drawer.Screen name="Habilidades" component={ListaHabilidades} />
            <Drawer.Screen name="Cadastrar Habilidade" component={CadastrarHabilidade} />           
        </Drawer.Navigator>
    )
}