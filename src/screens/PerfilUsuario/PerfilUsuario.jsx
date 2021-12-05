import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import HeaderTabela from './HeaderTabela/HeaderTabela'
import LinhaTabela from './LinhaTabela/LinhaTabela'

const user = {
    "id": 1,
    "nome": "Eduardo Nogueira",
    "cargo": "Desenvolvedor Java Sênior",
    "role": "dev",
    "email": "eduardo@nogueira.com",
    "photo_url": 'avatar-1637943875838-883171616.png',
    "habilidades": ['Angular',  'Docker', 'Sequelize', 'MySQL', 'MongoDB', 'React', 'React-native']
}

const API = 'http://192.168.1.105:4000/usuarios/photo/'

export default function PerfilUsuario(props) {

    const {email, nome, cargo, habilidades, photo_url} = props.route.params;

    useEffect(() => {
        console.log(props.route.params)
       
    })

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.containerDados}>
                    <View style={styles.containerImagem}>
                        <Image
                            style={styles.imagemPerfil}
                            source={{uri: API + photo_url}} 
                        />
                        <Text style={styles.textEmail}>{email}</Text>
                    </View>
                    <View style={styles.wrapperNomeCargo}>
                        <Text style={styles.textNome}>{nome}</Text>
                        <Text style={styles.textCargo}>{cargo}</Text>
                    </View>
                </View>
                <View style={styles.containerHabilidades}>
                   <FlatList 
                        data={habilidades}
                        onEndReachedThreshold={50}
                        ListHeaderComponent={<HeaderTabela />}
                        renderItem={({item}) => <LinhaTabela habilidade={item} nivel={1}/>}
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
