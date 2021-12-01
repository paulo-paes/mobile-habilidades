import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'
import Botao from '../../components/Botao/Botao'

export default function CadastrarHabilidade() {
    return (
        <View style={globalStyles.preencher}>
            <Text>Cadastrar Habilidade</Text>
            <View style={styles.habilidadeContainer}>
                <View style={styles.viewInput}>
                    <Text style={[globalStyles.inputLabel, styles.label]}>Nome</Text>
                    <TextInput style={globalStyles.input}/>
                </View>
                <View style={styles.viewInput}>
                    <Text style={[globalStyles.inputLabel, styles.label]}>Descrição</Text>
                    <TextInput
                        style={globalStyles.input} 
                        multiline={true}
                    />
                </View>
                <Botao style={styles.botao} text='Criar Habilidade'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    habilidadeContainer: {

        alignItems: 'center',
        flex: 0.5,
        padding: 15,
        marginTop: 30
    },
    viewInput: {
        width: '100%'
    },
    label: {
        paddingLeft: 10
    },
    botao: {
        marginTop: 10
    }
})