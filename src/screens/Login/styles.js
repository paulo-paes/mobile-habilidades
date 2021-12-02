import { StyleSheet } from "react-native";
import { cores } from '../../../globalStyles';

export default StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: cores.azulPrimarioClaro,
        paddingTop: 100
    },
    loginText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    loginInput: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    loginInputLabel: {
        fontSize: 16,
        alignSelf: 'auto',
        marginRight: 260
    },
    loginButton: {
        width: '50%',
        height: 35,
        padding: 'auto',
        borderRadius: 3
    },
    loginButtonText: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        color: 'white'
    },
    links: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 10
    },
    linkCriarConta: {
        color: cores.azulLink,
        fontSize: 15
        
    },
    linkEsqueciSenha: {}
})
