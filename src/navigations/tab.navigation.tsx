import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Inicio, List } from '../screens'
import { colors } from '../styles/globalstyles';
import { MessageNavigation } from './message.navigation';
import React from 'react';
import { Image, StyleSheet } from "react-native";

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
    const list = require('../assets/list.png')
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.green,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.green,
            tabBarInactiveTintColor: colors.white,
            tabBarStyle: { height: 60 },
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Inicio" component={Inicio} options={{
                tabBarIcon: () => (
                    <Image source={user}  style={styles.icone} />
                )
            }}
            />
            <Tab.Screen name="List" component={MessageNavigation} options={{
                tabBarIcon: () => (
                    <Image source={list} style={styles.icone} />
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icone: {
        width: 50,
        height: 50
    }
})