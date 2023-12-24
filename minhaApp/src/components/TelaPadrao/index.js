import React from "react";
import { SafeAreaView , StatusBar , KeyboardAvoidingView , Platform } from 'react-native';
import estilosGlobal, { cores } from '../../estilos';
import estilos from "./estilos";
// SafeAreaView :
// StatusBar:
// FlatList:
// KeyboardAvoidingView :Função para ajustar o teclado conforme a sua tela, o campo que estamos alterando, sempre ficará visivel após a exibição do teclado.
// Platform : Usado para indentificar qual plataforma está sendo utilizada, IOS ou ANDROIDE 

// <StatusBar backgroundColor={cores.roxo}/> = Irá alterar a barra superior apenas em ANDROIDES
// Para alterar no IOS, devemos alterar os estilos da SafeAreaView  
// STATUS BAR - androide
// SAFE AREA VIEW - iphone 
//OBS !!! Criamos 2 SafeAreaView, uma para a parte superior e outra para a inferior.

export default function TelaPadrao({ children }) {
    return <>
        <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.chocolate_1}/>     
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={estilosGlobal.preencher}
            >
                {children}
                
            </KeyboardAvoidingView>
        </SafeAreaView>
        
        <SafeAreaView style={estilos.ajusteTelaBaixo}>

        </SafeAreaView></>
        

}