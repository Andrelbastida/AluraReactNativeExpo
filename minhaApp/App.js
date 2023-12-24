import React from 'react';
import Rotas from './src/Rotas';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import TelaPadrao from './src/components/TelaPadrao';
import reactotron from 'reactotron-react-native';

//  Instalando o REACTOTRON: assistente de deBug
//  Ele facilita a leitura de logs e requisições, criando uma timeline filtrável com os logs.
//  https://github.com/infinitered/reactotron/releases?expanded=true&page=1&q=reactotron-app
reactotron.configure().useReactNative().connect();
// Isso irá conectar com nosso aplicativo instalado na Máquina ("Reactotron")
console.tron=reactotron;

export default function App() {
  console.tron.log({
    curso: "alura"
  });
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>;
};