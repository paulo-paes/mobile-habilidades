import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'


import Botao from '../../components/Botao/Botao'
import styles from './styles'
import ContainerInput from '../../components/ContainerInput/ContainerInput'
import API from '../../api/service'
import UserContext from '../../context/UserContext'

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {setUser, setAuthenticated, setGestor} = useContext(UserContext)

    function login(){
        API.login({email, senha})
            .then((res) => {
                API.setAuthToken(res.headers['authorization'])
                setUser(res.data)
                setAuthenticated(true)
                setGestor(res.data.role === 'gestor')
                navigation.navigate('Home')
            })
            .catch(err =>{
                // console.log(err)
                console.log("erro")
            })
    }

    return (
        <View style={styles.login}>
            <ContainerInput background={true}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.loginInputLabel}>Email</Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={email => setEmail(email)}
                    
                />
                <Text style={styles.loginInputLabel}>Senha</Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Senha'
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                    secureTextEntry={true}
                    
                />
                <Botao text='Entrar' acao={login}/>
                <View style={styles.links}>
                    <Text 
                        style={styles.linkCriarConta}
                        onPress={() => navigation.navigate('Cadastro')}
                    >Criar Conta</Text>
                    <Text 
                        style={styles.linkCriarConta}
                        onPress={() => navigation.navigate("EsqueciSenha")}
                    >
                        Esqueci minha senha
                    </Text>
                </View>
            </ContainerInput>
        </View>
    )
}

