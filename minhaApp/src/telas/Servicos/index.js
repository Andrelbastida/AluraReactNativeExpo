import React from 'react';
import { FlatList } from 'react-native';
// SafeAreaView :
// StatusBar:
// FlatList:
// KeyboardAvoidingView :Função para ajustar a tela conforme o uso do teclado, o campo que estamos alterando, sempre ficará visivel após a exibição do teclado.
// Platform : Usado para indentificar qual plataforma está sendo utilizada, IOS ou ANDROIDE 
import Item from './Item';

const servicos = [
    {
        id:1,
        nome: "Cookie Tradicional",
        preco: 5.00,
        descricao: "Delicioso Cookie tardicional, coberto com gotas de chocolate.",
        quantidade: 1
    },
    {
        id:2, 
        nome:"Red Velvet",
        preco: 7.00,
        descricao: "Recheado com leite condençado, coberto com gotas de chocolate branco", 
        quantidade:1
    },
    {
        id:3, 
        nome:"Nutella",
        preco: 8.00,
        descricao: "Recheado com Nutella, coberto com gotas de chocolate",
        quantidade: 1
    }
]

export default function Servicos(){
    return (
        <>
            <FlatList
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({item}) => <Item {...item}  />}
                keyExtractor={({id}) => String(id)}
            />
        </>

    )
}
