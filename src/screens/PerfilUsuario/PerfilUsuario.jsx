import React, { useContext, useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import HeaderTabela from './HeaderTabela/HeaderTabela'
import LinhaTabela from './LinhaTabela/LinhaTabela'
import UserContext from '../../context/UserContext'
import API from '../../api/service'
import { useState } from 'react/cjs/react.development'

const user = {
    "id": 1,
    "nome": "Eduardo Nogueira",
    "cargo": "Desenvolvedor Java Sênior",
    "role": "dev",
    "email": "eduardo@nogueira.com",
    "photo_url": 'avatar-1637943875838-883171616.png',
    "habilidades": ['Angular',  'Docker', 'Sequelize', 'MySQL', 'MongoDB', 'React', 'React-native']
}

const APIPHOTO = 'http://192.168.1.105:4000/usuarios/photo/';
const userPerfilMock = {
    id: 0,
    nome: '',
    cargo: '',
    email: '',
    photo_url: '',
    habilidades: []
}


export default function PerfilUsuario(props) {

    let profileUser = props.route.params;
    const {user} = useContext(UserContext);

    const [userPerfil, setUserPerfil] = useState(userPerfilMock);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', getUser)
        return unsubscribe
    }, [setUserPerfil, profileUser])


    function getSourcePhoto(){
        if(profileUser && profileUser.photo_url){
            return {uri: APIPHOTO + profileUser.photo_url}
        }else if(!profileUser && user.photo_url){
            return {uri: APIPHOTO + user.photo_url}
        }

        return require('../../../assets/avatar2.png')
    }

    function getUser(){
        if(profileUser){
            console.log(profileUser)
            API.getUserById(profileUser.id)
                .then(res => setUserPerfil(res.data))
                .catch(console.log)
        }else{
            API.getUserById(user.id)
                .then(res => setUserPerfil(res.data))
                .catch(console.log)
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.containerDados}>
                    <View style={styles.containerImagem}>
                        <Image
                            style={styles.imagemPerfil}
                            source={getSourcePhoto()} 
                        />
                        <Text style={styles.textEmail}>{userPerfil.email}</Text>
                    </View>
                    <View style={styles.wrapperNomeCargo}>
                        <Text style={styles.textNome}>{userPerfil.nome}</Text>
                        <Text style={styles.textCargo}>{userPerfil.cargo}</Text>
                    </View>
                </View>
                <View style={styles.containerHabilidades}>
                   <FlatList 
                        data={userPerfil.habilidades}
                        onEndReachedThreshold={50}
                        ListHeaderComponent={<HeaderTabela />}
                        renderItem={({item}) => <LinhaTabela habilidade={item.nome} nivel={item.nivel}/>}
                        keyExtractor={(item, index) => index} 
                   />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: '#FFF',
        flex: 1,
    },
    containerDados: {
        flexDirection: 'row',
        minHeight: 195,
    },
    containerHabilidades: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        paddingTop: 15,
        marginBottom: 30,
        maxHeight: 400,
    },
    imagemPerfil: {
        width: 128,
        height: 128,
        overflow: 'hidden',
        borderRadius: 128 / 2
    },
    textNome: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    textCargo: {
        fontSize: 14,
        color: 'grey'
    },
    textEmail: {
        fontSize: 16,
        marginTop: 18
    },
    wrapperNomeCargo: {
        marginLeft: -15,
        marginTop: 30
    }
});
