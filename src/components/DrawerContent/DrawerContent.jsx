import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar,Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import {Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons'
import UserContext from '../../context/UserContext';
import Photo from '../Photo/Photo';


const APIPHOTO = 'http://192.168.1.105:4000/usuarios/photo/'

export default function DrawerContent(props) {
    const {navigation} = props;
    const {user, isGestor, logoutUser} = useContext(UserContext);


    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.wrapperInfo}>
                            <Photo 
                                size={50}
                                user={user}
                            />
                            <View style={styles.wrapperName}>
                                <Title style={styles.title}>{user && user.nome}</Title>
                                <Caption style={styles.caption}>{user && user.cargo}</Caption>
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
                        {
                            isGestor ? (
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
                            ) : null
                        }
                        
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
                    onPress={logoutUser}
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