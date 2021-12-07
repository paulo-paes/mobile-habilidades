import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import API from '../../api/service'
import Alerta from '../../components/Alerta/Alerta'
import HabilidadeItem from '../../components/HabilidadeItem/HabilidadeItem'
import InputPesquisa from '../../components/InputPesquisa/InputPesquisa'
import { Banner, Button } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons'; 
import { cores } from '../../../globalStyles'


const habilidadesData = [
    {
        "id": 1,
        "nome": "Angular",
        "descricao": "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 2,
        "nome": "Bootstrap",
        "descricao": "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T16:25:10.000Z",
        "deletedAt": null
    },
    {
        "id": 3,
        "nome": "C",
        "descricao": "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 5,
        "nome": "Ionic",
        "descricao": "\tIonic é um SDK de código aberto completo para desenvolvimento de aplicativo móvel híbrido.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 6,
        "nome": "Java",
        "descricao": "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 8,
        "nome": "MongoDB",
        "descricao": "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 14,
        "nome": "MySQL",
        "descricao": "",
        "createdAt": "2021-11-26T16:25:59.000Z",
        "updatedAt": "2021-11-26T16:25:59.000Z",
        "deletedAt": null
    },
    {
        "id": 9,
        "nome": "NodeJS",
        "descricao": "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 10,
        "nome": "ReactJS",
        "descricao": "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 15,
        "nome": "React-Native",
        "descricao": "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 13,
        "nome": "Sequelize",
        "descricao": "",
        "createdAt": "2021-11-26T14:44:21.000Z",
        "updatedAt": "2021-11-26T14:44:21.000Z",
        "deletedAt": null
    },
    {
        "id": 11,
        "nome": "TypeScript",
        "descricao": "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    },
    {
        "id": 12,
        "nome": "Vue.js",
        "descricao": "\tVue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
        "createdAt": "2021-11-26T14:14:25.000Z",
        "updatedAt": "2021-11-26T14:14:25.000Z",
        "deletedAt": null
    }
]

export default function ListaHabilidades({navigation, route}) {

    const [habilidades, setHabilidades] = useState([]);
    const [habilidadesFiltrada, setFiltrada] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [search, setSearch] = useState(false);
    const [alerta, setAlerta] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', getHabilidades)
        return unsubscribe
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button 
                    icon={() => (
                        <Entypo name="magnifying-glass" size={24} color={'white'} />
                    )} 
                    onPress={() => {
                        setSearch(true)
                    }}
                    compact={true}
                    color={cores.azulPrimarioClaro}
                    style={{marginRight: 5}}                    
                />
            )
        })
    }, [navigation])

    function getHabilidades(){
        if(route.params && route.params.criada){
            setAlerta(true)
        }
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
            <Banner
                visible={search}
                actions={[
                    {
                        label: 'Pesquisar',
                        onPress: () => filtraHabilidades(filterText),
                        color: cores.azulPrimarioEscuro
                    },
                    {
                        label: "Fechar",
                        onPress: () => {
                            setSearch(false)
                            setFilterText('')
                            setFiltrada(habilidades)
                        },
                        color: cores.azulPrimarioEscuro
                    },
                ]}
            >
                <InputPesquisa 
                    acao={filtraHabilidades} 
                    acaoBlank={() => setFiltrada(habilidades)}
                    filter={filterText}
                    setFilter={setFilterText}
                />
            </Banner>
            
                <FlatList 
                    data={habilidadesFiltrada}
                    onEndReachedThreshold={50}
                    renderItem={({item}) => <HabilidadeItem {...item}/>}
                    keyExtractor={item => item.id}
                />

    
        
            <Alerta 
                text="Habilidade criada com sucesso!"
                duration={2000}
                visible={alerta}
                setVisible={setAlerta}
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
