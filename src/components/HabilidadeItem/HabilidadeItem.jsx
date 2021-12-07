import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function HabilidadeItem(props) {

    const navigation = useNavigation();
    const {nome, descricao, id, createdAt, deletedAt} = props;

    

    function handleClick(){
        const hab = {
            nome, 
            descricao,
            id,
            createdAt,
            deletedAt
        }
        navigation.navigate("VinculaHabilidade", hab)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.containerItem}
                onPress={handleClick}
            >
                <Text style={styles.textNome}>{nome}</Text>
                <Text style={styles.textDescricao}>{descricao}</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 5
    },
    containerItem: {
        backgroundColor: 'white',
        width: '90%',
        minHeight: 100,
        marginBottom: 5,
        padding: 10,
        paddingLeft: 15,
        elevation: 4,
        borderRadius: 8
    },
    textNome: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textDescricao: {
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    }
})