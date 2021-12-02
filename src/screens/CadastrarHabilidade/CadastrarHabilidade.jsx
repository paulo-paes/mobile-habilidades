import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'

export default function CadastrarHabilidade() {
    return (
        <ContainerInput>
            <View style={styles.viewInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.inputMultine]} 
                    multiline={true}
                    maxLength={100}
                    numberOfLines={4}
                />
            </View>
            <Botao style={styles.botao} text='Criar Habilidade'/>
        </ContainerInput>
            
           
        
    )
}

const styles = StyleSheet.create({
    viewInput: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 35
    },
    input: {
        height: 40,
        width: '80%',
        marginBottom: 15,
        borderWidth: 1,
        padding: 10
    },
    inputMultine: {
        height: 80,
        textAlignVertical: 'top'
    },
    botao: {
        marginTop: 10
    }
})