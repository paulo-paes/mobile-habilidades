import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';

export default function UsuarioItem(props) {
    
    const navigation = useNavigation();
    
    const {id, nome, cargo, role, email, photo_url, habilidades} = props;
    const user = {
        id,
        nome,
        cargo,
        role,
        email,
        photo_url,
        habilidades
    }

    function getSourcePhoto(){
        if(photo_url){
            return {uri: `http://192.168.1.105:4000/usuarios/photo/${photo_url}`}
        }

        return require('../../../assets/avatar2.png')
    }

    return (
        <TouchableOpacity 
            style={styles.containerUser}
            onPress={() => navigation.navigate('Perfil', user)}
        >
            <View style={styles.wrapperDados}>
                <Avatar.Image
                    source={getSourcePhoto()}
                />
                <View style={styles.dadosNome}>
                    <Text style={styles.textNome}>{nome}</Text>
                    <Text>{cargo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerUser: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 7,
        padding: 10
    },
    wrapperDados: {
        flexDirection: 'row',
        width: '100%'
    },
    dadosNome: {
        paddingLeft: 15
    },
    textNome: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
