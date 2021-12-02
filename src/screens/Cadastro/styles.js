import { StyleSheet } from "react-native";
import { cores } from "../../../globalStyles";

export default StyleSheet.create({
    cadastro: {
        backgroundColor: cores.azulPrimario, 
        flex: 1
    },
    cadastroTitulo: {
        fontSize: 30
    },
    cadastroLabel: {
        width: '77%'
    }, 
    cadastroBotao: {
        marginVertical: 10
    }
})