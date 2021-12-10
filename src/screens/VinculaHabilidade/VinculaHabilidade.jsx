import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, Button, Title, Headline, Subheading, HelperText } from 'react-native-paper'

import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'
import UserContext from '../../context/UserContext';
import API from '../../api/service'
import { cores } from '../../../globalStyles'
import { AntDesign } from '@expo/vector-icons'; 


export default function VinculaHabilidade(props) {

    const [nivel, setNivel] = useState(1);
    const [habilidade, setHabilidade] = useState(props.route.params);
    const [alerta, setAlerta] = useState(false)
    const {user} = useContext(UserContext)
   

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setHabilidade(props.route.params)
        })
        return unsubscribe
    }, [])

    function adicionaNivel(){
        if(nivel < 5) setNivel(nivel + 1)
    }

    function removeNivel(){
        if(nivel > 1) setNivel(nivel - 1)
        
    }

    function vinculaHabilidade(){
        const userHab = {
            nivel,
            id_habilidade: habilidade.id
        }
        API.vinculaHabilidade(user.id, userHab)
            .then(() => {
                props.navigation.navigate('Perfil', {vinculada: true})
            })
            .catch(() => setAlerta(true))
    }

    return (
        <ContainerInput>
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    disable={true}
                    editable={false}
                    value={habilidade.nome}
                    mode='flat'
                />
            </View>
            <View style={styles.containerInput}>
                <Subheading style={styles.label}>Nível</Subheading>
                <View style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity onPress={removeNivel}>
                            <AntDesign name="minussquare" size={24} color="black" />
                        </TouchableOpacity>
       
                        <Subheading>{nivel}</Subheading>
     
                        <TouchableOpacity onPress={adicionaNivel}>
                            <AntDesign name="plussquare" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Button
                mode='contained'
                color={cores.azulPrimarioEscuro}
                style={styles.botao}
                onPress={vinculaHabilidade}
            >Adicionar</Button>
            <HelperText 
                type='error'
                visible={alerta}
            >Você já possui esta habilidade cadastrada</HelperText>
        </ContainerInput>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    label: {
        textAlign: 'left',
        width: '78%',
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        width: '80%',
        marginBottom: 15,
        padding: 10
    },
    container: {
        alignSelf: 'flex-start', 
        marginLeft: 35
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 100,
        height: 30
    },
    botaoMais: {
        backgroundColor: '#04D46F',
        borderRadius: 30,
        width: 30
    },
    botaoMenos: {
        backgroundColor: '#e50609',
        borderRadius: 30,
        width: 30
    },
    textBotao: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    botao: {
        marginVertical: 15,
        width: '80%'
    }
})
