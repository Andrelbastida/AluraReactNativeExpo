import React, { useState } from "react";
import { TouchableOpacity ,View,Text, TextInput } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../components/CampoInteiro";
import Botao from "../../../components/Botao";

export default function Item ({nome , preco , descricao}) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const calculaTotal= (quantidade) => {
        setTotal(quantidade * preco);
    }

    //Será utilizada no "CAMPO INTEIRO" em "acao"
    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return (
        //INTL é uma biblioteca JS usada para formatar a moeda (PREÇO) em PT-BR
        <>
            <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </TouchableOpacity>
            {expandir && 
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
                    <Botao valor="Adicionar ao Carrinho" acao={() => {}} />
                </View>
            }
            <View style={estilos.divisor}></View>
        
        </>     
    );
}
    