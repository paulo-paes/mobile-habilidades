import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Photo from '../Photo/Photo';

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

    return (
        <TouchableOpacity 
            style={styles.containerUser}
            onPress={() => navigation.navigate('Perfil', user)}
        >
            <View style={styles.wrapperDados}>
                <Photo 
                    size={64}
                    user={{photo_url, id}}
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
