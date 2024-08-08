import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { colors } from '../styles/globalstyles';
import { TabNavigation } from "./tab.navigation";
import React from 'react';

type DrawerParamList = {
    Tab: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: colors.green },
            headerTintColor: colors.white,
            drawerStyle: { backgroundColor: colors.square, },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation} options={{
                drawerLabel: 'Inicio',
                headerTitle: 'Life Style',
            }} />
        </Drawer.Navigator>
    )
}