import { StyleSheet } from "react-native";
import { cores } from "../../../globalStyles";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: '20%',
        backgroundColor: cores.branco,
        flex: 1,
    },
    btnEnviar: {
        marginVertical: 10,
        width: '80%'
    },
    label: {
        fontSize: 20
    },
    input: {
        width: '80%',
        margin: 5,
        backgroundColor: cores.branco
    },
    paragraph: {
        fontSize: 16,
        paddingVertical: 10
    },
    erro: {
        fontSize: 14,
        paddingHorizontal: 5
    }
})