import React from 'react'
import { Text, TextInput, View } from 'react-native'
import globalStyles, { cores } from '../../../globalStyles'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'
import styles from './styles'

export default function Cadastro({ navigation }) {
    return (
        <ContainerInput background={true}>
            <Text style={styles.cadastroTitulo}>Cadastro</Text>
            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Nome</Text>
            <TextInput style={globalStyles.input}/>

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Email</Text>
            <TextInput style={globalStyles.input}/>

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Cargo</Text>
            <TextInput style={globalStyles.input}/>

            <Text style={[globalStyles.inputLabel, styles.cadastroLabel]}>Senha</Text>
            <TextInput secureTextEntry={true} style={globalStyles.input}/>

            <Botao style={styles.cadastroBotao} text='Criar Conta'/>

            <Text 
                style={globalStyles.link}
                onPress={() => navigation.navigate('Login')}
            >
                    Voltar
            </Text>
        </ContainerInput>            
    )
}
