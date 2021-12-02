import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'

export default function ContainerInput({children}) {
    return (
        <View style={globalStyles.preencher}>
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
        paddingVertical: 20
    }
})
