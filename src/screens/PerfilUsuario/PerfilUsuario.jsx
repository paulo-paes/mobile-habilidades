import React, { useContext, useEffect } from 'react'
import { View, Text,  StyleSheet, FlatList } from 'react-native'
import HeaderTabela from './HeaderTabela/HeaderTabela'
import LinhaTabela from './LinhaTabela/LinhaTabela'
import UserContext from '../../context/UserContext'
import API from '../../api/service'
import { useState } from 'react/cjs/react.development'
import { Avatar, Caption, Paragraph, Subheading, Title } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'; 
import { cores } from '../../../globalStyles'
import Alerta from '../../components/Alerta/Alerta'

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
    const [alerta, setAlerta] = useState(false);

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
        if(profileUser && profileUser.id){
            API.getUserById(profileUser.id)
                .then(res => setUserPerfil(res.data))
                .catch(console.log)
        }else{
            API.getUserById(user.id)
                .then(res => {
                    setUserPerfil(res.data)
                    if(props.route.params && props.route.params.vinculada) setAlerta(true)
                })
                .catch(console.log)
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.containerDados}>
                    <View style={styles.containerImagem}>
                        <Avatar.Image 
                            source={getSourcePhoto()}
                            size={128}
                        />
                        
                        <View style={styles.wrapperNomeCargo}>
                            <Title style={styles.textNome}>{userPerfil.nome}</Title>
                            <Caption style={styles.textCargo}>{userPerfil.cargo}</Caption>
                        </View>
                    </View>
                    <View style={styles.containerMail}>
                            <View style={styles.mailIcon}>
                                <Feather name="mail" size={24} color='black' style={{ textAlignVertical: 'bottom'}}/>
                            </View>
                            <Paragraph style={styles.textEmail}>{userPerfil.email}</Paragraph>
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
                
                <Alerta 
                    text='Habilidade vinculada'
                    duration={3000}
                    visible={alerta}
                    setVisible={setAlerta}
                />
                
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: cores.branco,
        flex: 1,
    },
    containerDados: {
        flexDirection: 'column',
        

    },
    containerHabilidades: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        paddingTop: 15,
        marginBottom: 10,
        maxHeight: 420,
    },
    containerImagem: {
        flexDirection: 'row'
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
        paddingLeft: 15,
    },
    wrapperNomeCargo: {
        paddingTop: 15,
        paddingLeft: 15
    },
    containerMail: {
        flexDirection: 'row',
        textAlign: 'center',
        paddingTop: 15,
        paddingLeft: 10,
        marginBottom: 20
    },
    mailIcon: {
        paddingRight: 15,
        borderRightWidth: 1,
        borderColor: cores.preto,
    },
    mail: {
        paddingLeft: 15
    }
});
