import React, { useState } from 'react'
import { View } from 'react-native'
import globalStyles, { cores } from '../../../globalStyles';
import API from '../../api/service';
import styles from './styles';
import { Button, Headline, HelperText, Paragraph, TextInput } from 'react-native-paper';


export default function EsqueciSenha({navigation}) {

    const [exibir, setExibir] = useState(0);
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState({email: false, codigo: false, senha: false})
    const [codigo, setCodigo] = useState('');
    const [senha, setSenha] = useState('');
    const [cSenha, setCSenha] = useState('');

    function renderEmail() {
        return (
            <>
                <Headline>Digite seu email</Headline>
                <TextInput 
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario} 
                    label='Email' 
                    value={email} 
                    onChangeText={e => setEmail(e)}
                    outlineColor={cores.preto}
                    error={erro.email}
                />

                <HelperText
                    type='error'
                    visible={erro.email}
                    style={styles.erro}
                >Email não cadastrado</HelperText>

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
                    error={erro.codigo}
                />

                <HelperText
                    type='error'
                    visible={erro.codigo}
                    style={styles.erro}
                >Código Inválido</HelperText>

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
                    error={senhasDiferem()}
                />
                <TextInput 
                    mode='outlined' 
                    style={styles.input}
                    selectionColor={cores.azulPrimario}
                    activeOutlineColor={cores.azulPrimario} 
                    outlineColor={cores.preto}
                    label='Confirmar senha' 
                    secureTextEntry={true}
                    value={cSenha}
                    onChangeText={cSenha => setCSenha(cSenha)}
                />

                <HelperText
                    type='error'
                    visible={senhasDiferem()}
                    style={styles.erro}
                >As senhas diferem</HelperText>

            
                <Button
                    onPress={novaSenha}
                    mode='contained'
                    color={cores.azulPrimarioEscuro}
                    style={styles.btnEnviar}
                >Enviar nova senha</Button>

                <HelperText
                    type='error'
                    visible={erro.senha}
                    style={styles.erro}
                >Erro ao processar</HelperText>
            </>
            
        )
    }

    async function emailCadastrado(){
        await API.emailCadastrado(email)
            .then(res => {
                if(res.data.emailCadastrado){
                    setExibir(exibir + 1)
                    API.recuperarSenha({email})
                }else{
                    setErro({...erro, email: true})
                }
            })
            .catch(() => setErro({...erro, email: true})) 
        
    }

    async function codigoCorreto(){
        await API.codigoCorreto({codigo, email})
            .then(res => {
                if(res.status == 204){
                    setExibir(exibir + 1)
                }else{
                    setErro({...erro, codigo: true})
                }
            })
            .catch(() => setErro({...erro, codigo: true}))
        
    }

    async function novaSenha(){
        await API.novaSenha({senha, codigo, email})
            .then(res => {
                if(res.status == 204){
                    navigation.navigate("Login")
                }
            })
            .catch(() => setErro({...erro, senha: true}))
    }

    const senhasDiferem = () => {
        if(senha && cSenha){
            return senha != cSenha
        }
        return false
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
