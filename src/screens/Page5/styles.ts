import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
    },
    conteudo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'Slackey_400Regular',
        fontSize: 48,
        color: colors.white,
        paddingBottom: 30
    },
    cadastro: {
        flex: 1.3,
        backgroundColor: '#FFF5',
        width: '100%',
        justifyContent: 'space-around',
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        color: '#76ADAD'
    }
});