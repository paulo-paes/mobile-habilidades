import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import API from '../../api/service'
import HabilidadeItem from '../../components/HabilidadeItem/HabilidadeItem'
import { cores } from '../../../globalStyles'
import SearchBanner from '../../components/SearchBanner/SearchBanner'


export default function ListaHabilidades({navigation, route}) {

    const [habilidades, setHabilidades] = useState([]);
    const [habilidadesFiltrada, setFiltrada] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', getHabilidades)
        return unsubscribe
    }, [])


    function getHabilidades(){

        API.getHabilidades()
            .then(res => {
                setHabilidades(res.data)
                setFiltrada(res.data)
            }).catch(err => console.log(err))
    }

    function filtraHabilidades(text){
        const reg = new RegExp(text, 'gi')
        let habilidadesFiltrada = habilidades.filter(habilidade => {
            return habilidade.nome.match(reg)
        })
        setFiltrada(habilidadesFiltrada)
    }


    return (
        <View style={styles.container}>

            <SearchBanner 
                acao={filtraHabilidades}
                acaoBlank={() => setFiltrada(habilidades)}
                filtro={filterText}
                setFiltro={setFilterText}
                navigation={navigation}
            />
            
            <FlatList 
                data={habilidadesFiltrada}
                onEndReachedThreshold={50}
                renderItem={({item}) => <HabilidadeItem {...item}/>}
                keyExtractor={item => item.id}
            />              
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: cores.branco,
        flex: 1,
    }
})
