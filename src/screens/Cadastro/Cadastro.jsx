import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import globalStyles, { cores } from '../../../globalStyles'
import API, { ApiInstance } from '../../api/service'
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
        <ContainerInput background={true}>
            <Text style={styles.cadastroTitulo}>Cadastro</Text>
            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Nome</Text>
            <TextInput 
                style={globalStyles.input}
                onChangeText={nome => setNome(nome)}
            />

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Email</Text>
            <TextInput 
                style={globalStyles.input}
                onChangeText={email => setEmail(email)}
            />

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Cargo</Text>
            <TextInput 
                style={globalStyles.input}
                onChangeText={cargo => setCargo(cargo)}
            />

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Senha</Text>
            <TextInput 
                secureTextEntry={true} 
                style={globalStyles.input}
                onChangeText={senha => setSenha(senha)}
            />

            <Botao style={styles.cadastroBotao} text='Criar Conta' acao={criarConta}/>

            <Text 
                style={globalStyles.link}
                onPress={() => navigation.navigate('Login')}
            >
                    Voltar
            </Text>
        </ContainerInput>            
    )
}
