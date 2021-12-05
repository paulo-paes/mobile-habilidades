import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'
import API from '../../api/service'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'

export default function CadastrarHabilidade() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    function criarHabilidade(){
        API.postHabilidade({nome, descricao})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <ContainerInput>
            <View style={styles.viewInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput 
                    style={styles.input}
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                />
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.inputMultine]} 
                    multiline={true}
                    maxLength={100}
                    numberOfLines={4}
                    value={descricao}
                    onChangeText={desc => setDescricao(desc)}
                />
            </View>
            <Botao style={styles.botao} text='Criar Habilidade' acao={criarHabilidade}/>
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