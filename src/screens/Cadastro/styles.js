import { StyleSheet } from "react-native";
import { cores } from "../../../globalStyles";

export default StyleSheet.create({
    cadastro: {
        flex: 1,
        width: '100%',
        paddingTop: 15,
        alignItems: 'center',
        backgroundColor: cores.branco
        
    },
    keyboardView: {
        flex: 1, backgroundColor: 'red', width: '100%',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        margin: 5,
        backgroundColor: cores.branco
    },
    cadastroTitulo: {
        fontSize: 30,
        marginBottom: 10
    },
    cadastroLabel: {
        width: '77%'
    }, 
    cadastroBotao: {
        marginVertical: 10,
        width: '80%'
    }
})