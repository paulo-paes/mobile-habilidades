import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


import { cores } from '../../../globalStyles';
import CadastrarHabilidade from '../CadastrarHabilidade/CadastrarHabilidade';
import ListaHabilidades from '../ListaHabilidades/ListaHabilidades';
import VinculaHabilidade from '../VinculaHabilidade/VinculaHabilidade';
import ListaUsuarios from '../ListaUsuarios/ListaUsuarios';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';
import UserContext from '../../context/UserContext';

const drawerScreenOptions = {
    headerStyle: {
        backgroundColor: cores.azulPrimario
    }, 
    headerTintColor: '#FFF'
}

const Drawer = createDrawerNavigator();

export default function HomeRoutes() {

    const { setAuthenticated, user, isGestor } = useContext(UserContext)

    return (
        <Drawer.Navigator 
            initialRouteName="Usuarios" 
            screenOptions={drawerScreenOptions}
            drawerContent={(props) => <CustomDrawerContent {...props} logout={{setAuthenticated, user, isGestor}}/>}
        >
            <Drawer.Screen name="Habilidades" component={ListaHabilidades} />
            <Drawer.Screen name="Cadastrar Habilidade" component={CadastrarHabilidade} />
            {/* <Drawer.Screen name="Vincular Habilidade" component={VinculaHabilidade} /> */}
            <Drawer.Screen name="Usuarios" component={ListaUsuarios} />
            <Drawer.Screen name="Perfil" component={PerfilUsuario} />
            
        </Drawer.Navigator>
    )
}


  
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Logout"
            onPress={() => {
                props.logout.setAuthenticated(false);
                props.logout.user = {};
                props.logout.isGestor = false;
            }}
        />
      </DrawerContentScrollView>
    );
  }
