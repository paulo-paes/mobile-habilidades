import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LinhaTabela({habilidade, nivel}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textTabela}>{habilidade}</Text>
            <Text style={styles.textNivel}>{nivel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    textTabela: {
        textAlign: 'center',
        minWidth: 110,
        fontSize: 16,
        padding: 5
    },
    textNivel: {
        textAlign: 'center',
        minWidth: 50,
        fontSize: 16,
    }
})
