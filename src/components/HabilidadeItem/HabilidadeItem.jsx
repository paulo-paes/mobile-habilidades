import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HabilidadeItem({nome, descricao}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Text style={styles.textNome}>{nome}</Text>
                <Text style={styles.textDescricao}>{descricao}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerItem: {
        backgroundColor: 'white',
        width: '90%',
        height: 100,
        marginBottom: 10,
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