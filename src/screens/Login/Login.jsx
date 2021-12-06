import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'



import API from '../../api/service'
import UserContext from '../../context/UserContext'
import { cores } from '../../../globalStyles'
import styles from './styles'

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
                console.log("erro")
            })
    }

    return (
        <View style={styles.login}>
                <Title style={styles.loginText}>Login</Title>
                <TextInput
                    style={styles.loginInput}
                    label='Email'
                    value={email}
                    onChangeText={email => setEmail(email)}
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />
                <TextInput
                    style={styles.loginInput}
                    label='Senha'
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                    secureTextEntry={true}
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />
                <Button
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    onPress={login}
                    style={styles.loginButton}
                >
                    Entrar
                </Button>

                <Button
                    onPress={() => navigation.navigate('EsqueciSenha')}
                    color={cores.azulPrimario}
                    
                    compact={true}
                    style={styles.link}
                    
                >
                    Esqueci minha senha
                </Button>
                
                <Button 
                    onPress={() => navigation.navigate('Cadastro')}
                    color={cores.azulPrimario}
                    style={styles.linkCriarConta}
                    compact={true}
                >
                    Criar Conta
                </Button>
        </View>
    )
}

