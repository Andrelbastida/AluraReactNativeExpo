import React from 'react';
import { SafeAreaView,StatusBar, Text , FlatList} from 'react-native';

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
    <SafeAreaView>

    <StatusBar/>
    <Text>Serviços !</Text>
    <FlatList 
        data={servicos} 
        renderItem={({item:{nome}}) => <Text>{nome}</Text>}
        keyExtractor={(id) => String()id}
    />
    </SafeAreaView>
        
    )
}