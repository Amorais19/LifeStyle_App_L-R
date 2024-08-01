import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Inicio, List } from '../screens'
import { colors } from '../styles/globalstyles';
import React from 'react';
import { Image } from "react-native";

type TabParamList = {
    Inicio: undefined
    List: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Inicio'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
    const user = require('../assets/inicio.png')
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.square,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.square,
            tabBarInactiveTintColor: colors.white,
        }}>
            <Tab.Screen name="Inicio" component={Inicio} options={{
            
            }}
            />
            <Tab.Screen name="List" component={List} options={{
                
            }} />
        </Tab.Navigator>
    )
}