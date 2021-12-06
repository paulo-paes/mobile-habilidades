import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { cores } from '../../../globalStyles'
import API from '../../api/service'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'

export default function CadastrarHabilidade({navigation}) {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setNome('');
            setDescricao('');
        })
        return unsubscribe
    })

    function criarHabilidade(){
        API.postHabilidade({nome, descricao})
            .then(res => {
                navigation.navigate('Habilidades')
            })
            .catch(err => console.log(err))
    }

    return (
        <ContainerInput>
            <View style={styles.viewInput}>
                {/* <Text style={styles.label}>Nome</Text> */}
                <TextInput 
                    style={styles.input}
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                    label="Nome"
                    mode="outlined"
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />
            </View>
            <View style={styles.viewInput}>
                {/* <Text style={styles.label}>Descrição</Text> */}
                <TextInput
                    style={styles.inputMultine} 
                    label="Descrição"
                    multiline={true}
                    maxLength={100}
                    numberOfLines={4}
                    value={descricao}
                    onChangeText={desc => setDescricao(desc)}
                    mode="outlined"
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                    numberOfLines={4}
                />
            </View>
            {/* <Botao style={styles.botao} text='Criar Habilidade' acao={criarHabilidade}/> */}
            <Button
                mode='contained'
                color={cores.azulPrimarioEscuro}
                style={styles.botao}
                onPress={criarHabilidade}
            >Criar Habilidade</Button>
        </ContainerInput>
            
           
        
    )
}

const styles = StyleSheet.create({

    viewInput: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 35
    },
    input: {

        width: '80%',
        marginBottom: 15,
        backgroundColor: cores.branco,
    },
    inputMultine: {
        height: 90,
        textAlignVertical: 'top',
        width: '80%',
        paddingTop: 3,
        backgroundColor: cores.branco
    },
    botao: {
        marginTop: 15,
        width: '80%'
    }
})