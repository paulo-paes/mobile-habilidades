import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar,Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import {Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons'
import UserContext from '../../context/UserContext';

export default function DrawerContent(props) {
    const {navigation} = props;
    const {user, setUser, setAuthenticated, setGestor} = useContext(UserContext);

    function logout(){
        setUser({})
        setAuthenticated(false)
        setGestor(false)
    }

    function getSourcePhoto(){
        if(user.photo_url){
            return {uri: API + user.photo_url}
        }

        return require('../../../assets/avatar2.png')
    }

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.wrapperInfo}>
                            <Avatar.Image 
                                source={getSourcePhoto()}
                                size={50}
                            />
                            <View style={styles.wrapperName}>
                                <Title style={styles.title}>{user.nome}</Title>
                                <Caption style={styles.caption}>{user.cargo}</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={(color, size) => (
                                <FontAwesome 
                                    name="home"
                                    size={24}
                                    color={color}
                                />
                            )} 
                            labelStyle={styles.labelFontSize}
                            label="Home"
                            onPress={() => navigation.navigate('Usuarios')}
                        />
                        <DrawerItem
                            icon={(color, size) => (
                                <FontAwesome 
                                    name="user"
                                    size={24}
                                    color={color}
                                />
                            )} 
                            labelStyle={styles.labelFontSizePerfil}
                            label="Perfil"
                            onPress={() => navigation.navigate('Perfil')}
                        />
                        <DrawerItem
                            icon={(color, size) => (
                                <FontAwesome 
                                    name="th-list"
                                    size={24}
                                    color={color}
                                />
                            )} 
                            labelStyle={styles.labelFontSize}
                            label="Habilidades"
                            onPress={() => navigation.navigate('Habilidades')}
                        />
                        <DrawerItem
                            icon={(color, size) => (
                                <FontAwesome 
                                    name="plus-square"
                                    size={24}
                                    color={color}
                                />
                            )} 
                            labelStyle={styles.labelFontSize}
                            label="Criar Habilidade"
                            onPress={() => navigation.navigate('Cadastrar Habilidade')}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={(color, size) => (
                        <FontAwesome 
                            name="sign-out"
                            color={color}
                            size={24}
                        />
                    )} 
                    labelStyle={styles.labelFontSize}
                    label="Sair"
                    onPress={logout}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
        borderBottomColor: '#f4f4f4', 
        borderBottomWidth: 1, 
        paddingBottom: 20
    },
    title: {
        marginTop: 3
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    labelFontSize: {
        fontSize: 16
    },
    labelFontSizePerfil: {
        fontSize: 16,
        paddingLeft: 5
    },
    wrapperInfo: {
        flexDirection: 'row',
        marginTop: 15
    },
    wrapperName: {
        flexDirection: 'column',
        marginLeft: 15,
        
    }
})