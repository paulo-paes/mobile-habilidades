import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { cores } from '../../../globalStyles'

export default function Botao({text, acao, style}) {
    return (
        <TouchableOpacity style={[style && style, styles.btn]} onPress={acao}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '50%',
        height: 35,
        padding: 'auto',
        backgroundColor: cores.azulMedio,
        borderRadius: 3
    },
    text: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        color: 'white'
    }
})
