import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { cores } from '../../../globalStyles';


export default function InputPesquisa({acao, acaoBlank}) {

    const [filtro, setFiltro] = useState('');

    function handlerInput(text){
        if(text.length > 0){
            setFiltro(text)
        }else{
            acaoBlank()
            setFiltro('')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.pesquisar} 
                placeholder="Pesquisar"
                value={filtro}
                onChangeText={handlerInput}

            />
            <TouchableOpacity style={styles.botaoPesquisar} onPress={() => acao(filtro)}>
                <Text style={styles.textBotao}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        width: '80%',
        height: 43,
        alignSelf: 'center',
        borderRadius: 10        
    },
    pesquisar: {
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        paddingVertical: 6,
        paddingRight: 79,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        elevation: 2000
    },
    botaoPesquisar: {
        marginLeft: -75,
        borderLeftWidth: 1,
        height: '95%',
        paddingVertical: 6,
        paddingHorizontal: 5,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: cores.verdeSecundarioEscuro

    },
    textBotao: {
        textAlign: 'center',
        height: 30,
        paddingTop: 2.5,
        color: '#FFF'
    }
})