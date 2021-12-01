import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'

export default function VinculaHabilidade() {
    return (
        <View style={globalStyles.preencher}>
            <Text>Vincula Habilidade</Text>

            <View style={styles.containerHabilidade}>
                <View style={styles.containerInput}>
                    <Text style={[globalStyles.inputLabel, styles.label]}>Habilidade</Text>
                    <TextInput style={globalStyles.input} editable={false} value='Angular'/>
                </View>
                <View style={styles.containerInput}>
                    <Text style={[globalStyles.inputLabel, styles.label]}>Nível</Text>
                    <TextInput style={globalStyles.input} placeholder='Nível'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        width: '100%',
        marginLeft: 40
    },
    containerHabilidade: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        paddingLeft: 10,
        marginTop: 10
    }
})
