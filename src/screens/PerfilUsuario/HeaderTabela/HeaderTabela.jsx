import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HeaderTabela() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTabela}>Habilidade</Text>
            <Text style={styles.textTabela}>Nível</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textTabela: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})