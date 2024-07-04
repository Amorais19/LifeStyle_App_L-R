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
        width: '100%',
        backgroundColor: colors.blur,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#76ADAD',
        fontWeight: '600'
    },
    space: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 350,
        backgroundColor: colors.square,
        padding: 10
    }
});