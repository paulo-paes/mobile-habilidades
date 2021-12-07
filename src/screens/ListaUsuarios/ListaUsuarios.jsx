import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'
import UsuarioItem from '../../components/UsuarioItem/UsuarioItem'
import API from '../../api/service'
import SearchBanner from '../../components/SearchBanner/SearchBanner'


export default function ListaUsuarios({navigation}) {

    const [users, setUsers] = useState([]);
    const [usersFiltrados, setFiltrados] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', getUsers)

        return unsubscribe
    }, [])


    function getUsers(){
        API.getUsers()
            .then((res) => {
                setUsers(res.data)
                setFiltrados(res.data)
            })
            .catch(err => console.log(err))
    }

    function filtraUsers(text){
        const reg = new RegExp(text, 'gi')
        let usersFiltrados = users.filter(user => {
            return user.nome.match(reg)
        })
        setFiltrados(usersFiltrados)
    }


    return (
        <View style={[globalStyles.preencher, styles.containerLista]}>
            <SearchBanner 
                acao={filtraUsers}
                acaoBlank={() => setFiltrados(users)}
                filtro={filterText}
                setFiltro={setFilterText}
                navigation={navigation}
            />
            <FlatList 
                data={usersFiltrados}
                renderItem={({item}) => <UsuarioItem {...item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerLista: {
        backgroundColor: 'white',
    }
})
