import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function UsuarioItem({nome, cargo, habilidades}) {

    return (
        <TouchableOpacity style={styles.containerUser}>
            <View style={styles.wrapperDados}>
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
        justifyContent: 'space-between',
        width: '100%'
    },
    dadosNome: {},
    textNome: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
