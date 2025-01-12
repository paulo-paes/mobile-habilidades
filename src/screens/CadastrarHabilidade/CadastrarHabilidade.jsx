import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { cores } from '../../../globalStyles'
import API from '../../api/service'
import ContainerInput from '../../components/ContainerInput/ContainerInput'

export default function CadastrarHabilidade({navigation}) {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState(false);
    const desc = useRef(null)

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setNome('');
            setDescricao('');
        })
        return unsubscribe
    })

    function criarHabilidade(){
        if(nome.length > 0){
            API.postHabilidade({nome, descricao})
                .then(res => {
                    setErro(false)
                    navigation.navigate('Habilidades')
                })
                .catch(err => console.log(err))
        }else{
            setErro(true)
        }
    }

    return (
        <ContainerInput>
            <View style={styles.viewInput}>
           
                <TextInput 
                    style={styles.input}
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                    label="Nome"
                    mode="outlined"
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                    error={erro}
                />
                <HelperText 
                    type='error'
                    visible={erro}
                >Por favor, digite um nome para a habilidade.</HelperText>
            </View>
            <View style={styles.viewInput}>
                <TextInput
                    style={styles.inputMultine}
                    ref={desc} 
                    placeholder="Descrição"
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