import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

export default (pequeno, invertido) => StyleSheet.create({
    botao: {
        with: 140, 
        paddingVertical: pequeno ? 3 : 9,
        paddingHorizontal:20,
        backgroundColor: invertido ? cores.laranja : cores.chocolate_2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:2,
        },
        shadowOpacity:0.23,
        shadowRadius: 2.62,
        elevation:4,
    },
    valor: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: invertido? cores.chocolate_2 : cores.laranja,
    }

});