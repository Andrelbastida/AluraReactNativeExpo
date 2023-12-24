import React, { useState } from "react";
import { View,Text, TextInput } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../components/CampoInteiro";
import Botao from "../../../components/Botao";

export default function Item ({nome , preco , descricao, quantidade:quantidadeInicial}) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco* quantidadeInicial);

    const calculaTotal= (quantidade) => {
        setTotal(quantidade * preco);
    }

    //Será utilizada no "CAMPO INTEIRO" em "acao"
    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }


    return (
        //INTL é uma biblioteca JS usada para formatar a moeda (PREÇO) em PT-BR
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </View>
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quatidade:</Text>
                        <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }</Text>
                        <TextInput />
                    </View>
                </View>
                <Botao valor="Remover do Carrinho" acao={() => {}} />
            </View>
            
            <View style={estilos.divisor}></View>
        
        </>     
    );
}
    