import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { cores } from '../../../globalStyles';


export default function InputPesquisa({acao, acaoBlank, filter, setFilter}) {

    // const [filtro, setFiltro] = useState('');

    function handlerInput(text){
        if(text.length > 0){
            // setFiltro(text)
            setFilter(text)
        }else{
            acaoBlank()
            setFilter('')
        }
    }

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Pesquisar"
                value={filter}
                onChangeText={handlerInput}
                onIconPress={() => acao(filter)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350
    }
})