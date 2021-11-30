import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native'


import globalStyles from '../../../globalStyles'

export default function Container({children}) {
    return (
        <SafeAreaView style={globalStyles.preencher}>
            <StatusBar />
                {children}
        </SafeAreaView>
    )
}
