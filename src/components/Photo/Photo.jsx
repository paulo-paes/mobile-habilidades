import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'

const APIPHOTO = 'http://192.168.1.105:4000/usuarios/photo/'

export default function Photo({size, user, alterUser = false}) {


    function getSourcePhoto(){
        if(user && user.photo_url){
            return {uri: APIPHOTO + user.photo_url}
        }else if(alterUser && alterUser.photo_url){
            return {uri: APIPHOTO + alterUser.photo_url}
        }

        return require('../../../assets/user2.png')
    }

    return (
        <Avatar.Image 
            size={size}
            source={getSourcePhoto()}
        />
    )
}
