import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'
import UsuarioItem from '../../components/UsuarioItem/UsuarioItem'

const data = [
    {
        "id": 1,
        "nome": "Eduardo Nogueira",
        "cargo": "Desenvolvedor Java Sênior",
        "role": "dev",
        "email": "eduardo@nogueira.com",
        "habilidades": []
    },
    {
        "id": 15,
        "nome": "Eduardo Silva",
        "cargo": "Desenvolvedor Jr.",
        "role": "dev",
        "email": "eduardo@silva.com",
        "habilidades": []
    },
    {
        "id": 13,
        "nome": "Fernando Duarte",
        "cargo": "Desenvolvedor",
        "role": "gestor",
        "email": "fernando@duarte.com",
        "habilidades": []
    },
    {
        "id": 2,
        "nome": "Gilmar Pereira",
        "cargo": "Desenvolvedor Frontend",
        "role": "dev",
        "email": "gilmar@pereira.com",
        "habilidades": [
            "Angular",
            "MySQL",
            "SQL",
            "MongoDB"
        ]
    },
    {
        "id": 16,
        "nome": "Gustavo Marcelo",
        "cargo": "Desenvolvedor",
        "role": "dev",
        "email": "gustavo@marcelo.com",
        "habilidades": [
            "Angular",
            "MySQL",
            "SQL",
            "MongoDB"
        ]
    },
    {
        "id": 3,
        "nome": "Gustavo Pereira",
        "cargo": "Desenvolvedor Java",
        "role": "dev",
        "email": "gustavo@pereira.com",
        "habilidades": [
            "Angular",
            "MySQL",
            "SQL",
            "MongoDB"
        ]
    },
    {
        "id": 4,
        "nome": "João da Silva",
        "cargo": "Desenvolvedor Pleno",
        "role": "dev",
        "email": "joão@silva.com",
        "habilidades": [
            "Angular",
            "MySQL",
            "SQL",
            "MongoDB"
        ]
    },
    {
        "id": 5,
        "nome": "Lucas Henrique",
        "cargo": "Desenvolvedor Backend",
        "role": "dev",
        "email": "lucas@henrique.com",
        "habilidades": []
    },
    {
        "id": 6,
        "nome": "Marcos Silva",
        "cargo": "Desenvolvedor Sênior",
        "role": "dev",
        "email": "marcos@silva.com",
        "habilidades": [
            "Angular",
            "MySQL",
            "SQL",
            "MongoDB"
        ]
    },
    {
        "id": 7,
        "nome": "Maria Eduarda",
        "cargo": "Desenvolvedora",
        "role": "dev",
        "email": "maria@eduarda.com",
        "habilidades": []
    },
    {
        "id": 8,
        "nome": "Matheus Henrique",
        "cargo": "Desenvolvedor Pleno",
        "role": "dev",
        "email": "matheus@henrique.com",
        "habilidades": []
    },
    {
        "id": 9,
        "nome": "Mayara Santos",
        "cargo": "Desenvolvedora Sênior",
        "role": "dev",
        "email": "mayara@santos.com",
        "habilidades": [
            "Angular"
        ]
    },
    {
        "id": 10,
        "nome": "Miguel Marques",
        "cargo": "Desenvolvedor Mobile",
        "role": "dev",
        "email": "miguel@marques.com",
        "habilidades": [
            "Angular"
        ]
    },
    {
        "id": 14,
        "nome": "Paulo Paes",
        "cargo": "Desenvolvedor Jr.",
        "role": "gestor",
        "email": "phpaes99@gmail.com",
        "habilidades": [
            "MySQL",
        ]
    },
    {
        "id": 11,
        "nome": "Tiago Marcelo",
        "cargo": "Desenvolvedor",
        "role": "dev",
        "email": "tiago@marcelo.com",
        "habilidades": []
    },
    {
        "id": 12,
        "nome": "Vanessa Marques",
        "cargo": "Desenvolvedora",
        "role": "dev",
        "email": "vanessa@marques.com",
        "habilidades": []
    }
]

export default function ListaUsuarios() {
    return (
        <View style={[globalStyles.preencher, styles.containerLista]}>
            <FlatList 
                data={data}
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
