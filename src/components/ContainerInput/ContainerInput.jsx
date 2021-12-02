import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles, { cores } from '../../../globalStyles'

export default function ContainerInput({children, background = false }) {
    return (
        <View style={[globalStyles.preencher, background ? styles.corFundoAzul : styles.corFundoBranco]}>
            <View style={styles.containerInput}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 30,
        paddingHorizontal: 5,
        paddingVertical: 30
    },
    corFundoAzul: {
        backgroundColor: cores.azulPrimarioClaro
    },
    corFundoBranco: {
        backgroundColor: 'white'
    }
})
