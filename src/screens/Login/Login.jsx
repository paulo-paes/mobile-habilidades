import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import globalStyles from '../../../globalStyles'
import Botao from '../../components/Botao/Botao'
import styles from './styles'

export default function Login({navigation}) {
    return (
        <View style={globalStyles.preencher}>
            <View style={styles.login}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.loginInputLabel}>Email</Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Email'
                    
                />
                <Text style={styles.loginInputLabel}>Senha</Text>
                <TextInput
                    style={styles.loginInput}
                    placeholder='Senha'
                    secureTextEntry={true}
                    
                />
                <Botao text='Entrar' acao={() => navigation.navigate('CadastrarHabilidade')}/>
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
            </View>
        </View>
    )
}

