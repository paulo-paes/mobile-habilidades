import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import globalStyles from '../../../globalStyles';
import API from '../../api/service';
import Botao from '../../components/Botao/Botao';
import ContainerInput from '../../components/ContainerInput/ContainerInput';
import styles from './styles';

export default function EsqueciSenha() {

    const [exibir, setExibir] = useState(0);
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');

    function renderEmail() {
        return (
            <>
                <Text style={styles.label} >Digite seu email</Text>
                <TextInput 
                    style={globalStyles.input} 
                    placeholder='Email' value={email} 
                    onChangeText={e => setEmail(e)}
                />
                <Text style={globalStyles.inputLabel}>Um código será enviado ao seu email</Text>
                <Botao acao={emailCadastrado} style={styles.btnEnviar} text='Enviar' />
            </>
        )
    }

    function renderCodigo(){
        return (
            <>
                <Text style={globalStyles.inputLabel} >Um código foi enviado ao seu email</Text>
                <TextInput 
                    style={globalStyles.input} 
                    placeholder='Digite o código'
                    value={codigo}
                    onChangeText={cod => setCodigo(cod)}
                />
                <Botao 
                    acao={codigoCorreto} 
                    style={styles.btnEnviar} 
                    text='Confirmar código' 
                />
            </>
        )
    }

    function renderSenha(){
        return (
            <>
                <Text  style={styles.label}>Digite sua nova senha</Text>
                <TextInput 
                    style={globalStyles.input} 
                    placeholder='Senha'
                    value={senha}
                    onChangeText={senha => setSenha(senha)}
                />
                <TextInput style={globalStyles.input} placeholder='Confirmar senha'/>
                <Botao
                    acao={novaSenha}  
                    style={styles.btnEnviar} 
                    text='Enviar nova senha' 
                />
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
        console.log(resposta)
    }

    return (
        <ContainerInput background={true}>
            {
                exibir === 0 ? renderEmail() :
                exibir === 1 ? renderCodigo() : renderSenha()
            }
        </ContainerInput>
    )
}
