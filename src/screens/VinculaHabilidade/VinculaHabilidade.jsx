import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Botao from '../../components/Botao/Botao'
import ContainerInput from '../../components/ContainerInput/ContainerInput'
import { BsFillPlusCircleFill } from 'react-icons/bs'
export default function VinculaHabilidade() {

    const [nivel, setNivel] = useState(1);

    function adicionaNivel(){
        if(nivel < 5) setNivel(nivel + 1)
    }

    function removeNivel(){
        if(nivel > 1) setNivel(nivel - 1)
        
    }


    return (
        <ContainerInput>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Habilidade</Text>
                <TextInput style={styles.input} editable={false} value='Angular'/>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Nível</Text>
                <View style={styles.container}>
                    <View style={styles.containerBotoes}>
                        <TouchableOpacity onPress={removeNivel} style={styles.botaoMenos}>
                            <Text style={styles.textBotao}> - </Text>
                        </TouchableOpacity>
                        <Text>{nivel}</Text>
                        <TouchableOpacity onPress={adicionaNivel} style={styles.botaoMais}>
                            <Text style={styles.textBotao}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Botao style={styles.botao} text='Adicionar'/>
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
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 35
    },
    input: {
        height: 40,
        width: '80%',
        marginBottom: 15,
        borderWidth: 1,
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
        margin: 15
    }
})
