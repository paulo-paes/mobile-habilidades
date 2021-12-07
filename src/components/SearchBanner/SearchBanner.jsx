import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { Banner, Button } from 'react-native-paper'
import { cores } from '../../../globalStyles'
import InputPesquisa from '../InputPesquisa/InputPesquisa'
import { Entypo } from '@expo/vector-icons'; 
import { useState } from 'react/cjs/react.development'

export default function SearchBanner({filtro, setFiltro, acao, acaoBlank, acaoClose, visible, navigation}) {

    const [search, setSearch] = useState(false);


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


    return (
        <Banner
            visible={search}
            actions={[
                {
                    label: 'Pesquisar',
                    onPress: () => acao(filtro),
                    color: cores.azulPrimarioEscuro
                },
                {
                    label: "Fechar",
                    onPress: () => setSearch(false),
                    color: cores.azulPrimarioEscuro
                },
            ]}
        >
            <InputPesquisa 
                acao={acao} 
                acaoBlank={acaoBlank}
                filter={filtro}
                setFilter={setFiltro}
            />
        </Banner>
    )
}
