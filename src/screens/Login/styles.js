import { StyleSheet } from "react-native";
import { cores } from '../../../globalStyles';

export default StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        
        paddingTop: 100
    },
    loginText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    loginInput: {
        width: '80%',
        margin: 12,
        color: cores.azulClaro,
        backgroundColor: cores.branco
    },
    loginInputLabel: {
        fontSize: 16,
        alignSelf: 'auto',
        marginRight: 260
    },
    loginButton: {
        width: '80%',
        marginTop: 10
    },
    loginButtonText: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        color: 'white'
    },
    link: {
        margin: 10,
        
    },
    linkCriarConta: {
        justifyContent: 'flex-end'
    }
})
