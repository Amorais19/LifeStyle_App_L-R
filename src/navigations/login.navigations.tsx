import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { Entrar, Registrar } from "../screens"

type LoginStackParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Register'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList>()
    return (
        <Stack.Navigator id='login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Register' component={Registrar} />
            <Stack.Screen name='Login' component={Entrar} />
        </Stack.Navigator>
    )
}