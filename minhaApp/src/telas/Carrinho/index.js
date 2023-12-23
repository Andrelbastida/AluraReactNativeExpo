import React from 'react';
import { SafeAreaView,StatusBar, FlatList, KeyboardAvoidingView, Platform} from 'react-native';
// SafeAreaView :
// StatusBar:
// FlatList:
// KeyboardAvoidingView :Função para ajustar o teclado conforme a sua tela, o campo que estamos alterando, sempre ficará visivel após a exibição do teclado.
// Platform : Usado para indentificar qual plataforma está sendo utilizada, IOS ou ANDROIDE 
import Item from './Item';
import estilosGlobal from '../../estilos';

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÂO dê banho no seu gato! mas se precisar nós damos "
    },
    {
        id:2, 
        nome:"Vacina V4",
        preco: 89.9,
        descricao: "Uma doze da vacina v4. Seu gato precisa de duas."
    },
    {
        id:3, 
        nome:"Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma doze da vacina Antirrábica. Seu gato precisa de uma por ano." 
    }
]

export default function Servicos(){
    return (
        <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar/>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
        >
            <FlatList
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item}  />}
                keyExtractor={({id}) => String(id)}
            />
        </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
