import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { Page6, Page5 } from "../screens"

type LoginStackParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList>()
    return (
        <Stack.Navigator id='login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Page6} />
            <Stack.Screen name='Register' component={Page5} />
        </Stack.Navigator>
    )
}