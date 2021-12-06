import React, { useState } from 'react'
import { Text, View } from 'react-native'
import globalStyles, { cores } from '../../../globalStyles';
import API from '../../api/service';
import Botao from '../../components/Botao/Botao';
import ContainerInput from '../../components/ContainerInput/ContainerInput';
import styles from './styles';
import { Button, Headline, Paragraph, TextInput } from 'react-native-paper';


export default function EsqueciSenha({navigation}) {

    const [exibir, setExibir] = useState(0);
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');

    function renderEmail() {
        return (
            <>
                <Headline  >Digite seu email</Headline>
                <TextInput 
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario} 
                    label='Email' 
                    value={email} 
                    onChangeText={e => setEmail(e)}
                    outlineColor={cores.preto}
                />
                <Button
                    onPress={emailCadastrado}
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.btnEnviar}
                >Enviar</Button>
                <Paragraph style={styles.paragraph}>Um código será enviado ao seu email</Paragraph>
            </>
        )
    }

    function renderCodigo(){
        return (
            <>
                <Paragraph style={globalStyles.inputLabel} >Um código foi enviado ao seu email</Paragraph>
                <TextInput
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario}
                    label='Código'
                    placeholder='Digite o código'
                    value={codigo}
                    onChangeText={cod => setCodigo(cod)}
                    outlineColor={cores.preto}
                />

                <Button
                    style={styles.btnEnviar}
                    mode='contained'
                    onPress={codigoCorreto}
                    color={cores.azulPrimarioEscuro}
                >Confirmar Código</Button>
            </>
        )
    }

    function renderSenha(){
        return (
            <>
                <Headline  style={styles.label}>Digite sua nova senha</Headline>
                <TextInput 
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario} 
                    label='Senha'
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                    outlineColor={cores.preto}
                    secureTextEntry={true}
                />
                <TextInput 
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario} 
                    outlineColor={cores.preto}
                    label='Confirmar senha' 
                    secureTextEntry={true}/>
               
                <Button
                    onPress={novaSenha}
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.btnEnviar}
                >Enviar nova senha</Button>
            </>
            
        )
    }

    async function emailCadastrado(){
        const resposta = await API.emailCadastrado(email);
        if(resposta.data.emailCadastrado){
            setExibir(exibir + 1)
            API.recuperarSenha({email})
        }
            
    }

    async function codigoCorreto(){
        const resposta = await API.codigoCorreto({codigo, email})
        if(resposta.status == 204){
            setExibir(exibir + 1)
        }
    }

    async function novaSenha(){
        const resposta = await API.novaSenha({senha, codigo, email})
        if(resposta.status == 204){
            navigation.navigate("Login")
        }
    }

    return (
        <View style={styles.container}>
            {
                exibir === 0 ? renderEmail() :
                exibir === 1 ? renderCodigo() : renderSenha()
            }
        </View>
    )
}
