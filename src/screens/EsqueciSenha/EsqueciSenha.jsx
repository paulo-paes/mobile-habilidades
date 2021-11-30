import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import globalStyles from '../../../globalStyles';
import Botao from '../../components/Botao/Botao';
import styles from './styles';

export default function EsqueciSenha() {

    const [exibir, setExibir] = useState(0);

    function renderEmail() {
        return (
            <>
                <Text style={globalStyles.inputLabel} >Digite seu email</Text>
                <TextInput style={globalStyles.input} placeholder='Email'/>
                <Text style={globalStyles.inputLabel}>Um código será enviado ao seu email</Text>
                <Botao acao={() => setExibir(exibir + 1)} style={styles.btnEnviar} text='Enviar' />
            </>
        )
    }

    function renderCodigo(){
        return (
            <>
                <Text style={globalStyles.inputLabel} >Um código foi enviado ao seu email</Text>
                <TextInput style={globalStyles.input} placeholder='Digite o código'/>
                <Botao 
                    acao={() => setExibir(exibir + 1)} 
                    style={styles.btnEnviar} 
                    text='Confirmar código' 
                />
            </>
        )
    }

    function renderSenha(){
        return (
            <>
                <Text style={globalStyles.inputLabel}>Digite sua nova senha</Text>
                <TextInput style={globalStyles.input} placeholder='Senha'/>
                <TextInput style={globalStyles.input} placeholder='Confirmar senha'/>
                <Botao  
                    style={styles.btnEnviar} 
                    text='Enviar nova senha' 
                />
            </>
            
        )
    }

    return (
        <View style={[globalStyles.preencher, styles.container]}>
            {
                exibir === 0 ? renderEmail() :
                exibir === 1 ? renderCodigo() : renderSenha()
            }
        </View>
        
    )
}
