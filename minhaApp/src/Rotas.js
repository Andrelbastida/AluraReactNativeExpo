import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';
import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor:cores.chocolate_2,
            inactiveTintColor: cores.claro,
            activeBackgroundColor: cores.chocolate_2,
            inactiveBackgroundColor: cores.chocolate_1,
            style:{
                height: 70,
            },
            labelStyle:{
                width:'100%',
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21, 
                marginTop: 3,
                paddingTop: 21, 
                backgroundColor: cores.chocolate_1,
            },
            // Sempre que o teclado for aparecer, a barra inferior irá sumir. (keyboardHidesTabBar)
            keyboardHidesTabBar: true
            
        }}>
            <Tab.Screen name="Cookies" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}