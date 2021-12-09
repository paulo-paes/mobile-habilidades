import React, { useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import { Button, HelperText, TextInput, Title } from 'react-native-paper'
import { cores } from '../../../globalStyles'
import { useHeaderHeight } from '@react-navigation/elements';

import API from '../../api/service'
import styles from './styles'

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const [exibir, setExibir] = useState(0);

    function criarConta(){
        const user = {
            nome,
            cargo,
            email,
            senha
        }
        API.criarConta(user)
            .then(res => {
                navigation.navigate('Login')
            })
            .catch(console.log)
    }

    const validEmail = () => email && email.includes('@')
    const validPass = () => senha && senha.length >= 8

    function renderSenha(){
        return (
            <>
                <TextInput 
                    style={styles.input}
                    onChangeText={cargo => setCargo(cargo)}
                    value={cargo}
                    label='Cargo'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <HelperText visible={false}></HelperText>


                <TextInput 
                    secureTextEntry={true} 
                    style={styles.input}
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                    label='Senha'
                    error={senha && !validPass()}
                    placeholder='*****'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <HelperText
                    type='error'
                    visible={senha && !validPass()}
                >A senha deve conter no mínimo 8 caracteres</HelperText>

                <Button
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.cadastroBotao}
                    onPress={criarConta}
                    >
                    Criar Conta
                </Button>
            </>
        )
    }

    function renderEmail(){
        return (
            <>
                         
                <TextInput 
                    style={styles.input}
                    onChangeText={nome => setNome(nome)}
                    value={nome}
                    label='Nome'
                    mode='outlined'
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <HelperText visible={false}></HelperText>

                <TextInput 
                    style={styles.input}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    label='Email'
                    mode='outlined'
                    error={email && !validEmail()}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    outlineColor={cores.preto}
                />

                <HelperText
                    type='error'
                    visible={email && !validEmail()}
                >Email inválido</HelperText>

                <Button
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.cadastroBotao}
                    onPress={() => setExibir(exibir + 1)}
                >Próximo</Button>
            </>
        )
    }


    return (
        <View style={styles.cadastro}>
            <Title style={styles.cadastroTitulo}>Cadastro</Title> 
            {
                exibir === 0 ? renderEmail() : renderSenha()
            }
        </View>        
    )
}
