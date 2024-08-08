import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { List, Cad } from '../screens'
import React from 'react' 
type MessageStackParamList = {
    Tarefa: undefined
    CadTarefa: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Tarefa'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tarefa' component={List} />
            <Stack.Screen name='CadTarefa' component={Cad} />
        </Stack.Navigator>
    )
}