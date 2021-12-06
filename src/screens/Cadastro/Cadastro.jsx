import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'
import globalStyles, { cores } from '../../../globalStyles'
import API from '../../api/service'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'
import styles from './styles'

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');

    function criarConta(){
        const user = {
            nome,
            cargo,
            email,
            senha
        }
        API.criarConta(user)
            .then(console.log)
            .catch(console.log)
    }



    return (
            <View style={styles.cadastro}>
                <Title style={styles.cadastroTitulo}>Cadastro</Title>
                <TextInput 
                    style={styles.input}
                    onChangeText={nome => setNome(nome)}
                    label='Nome'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <TextInput 
                    style={styles.input}
                    onChangeText={email => setEmail(email)}
                    label='Email'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />


                <TextInput 
                    style={styles.input}
                    onChangeText={cargo => setCargo(cargo)}
                    label='Cargo'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />


                <TextInput 
                    secureTextEntry={true} 
                    style={styles.input}
                    onChangeText={senha => setSenha(senha)}
                    label='Senha'
                    placeholder='*****'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <Button
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.cadastroBotao}
                    onPress={criarConta}
                >
                    Criar Conta
                </Button>


            </View>        
    )
}
