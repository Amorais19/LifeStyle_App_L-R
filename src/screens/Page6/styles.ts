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
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Slackey_400Regular',
        fontSize: 48,
        color: colors.white
    },
    cadastro: {
        flex: 1.5,
        width: '100%',
        backgroundColor: colors.blur,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50
    },
    cad: {
        flex:1.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#76ADAD',
        fontWeight: '600'
    },
    textinput: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    space: {
        
    },
    input: {
        width: 350,
        backgroundColor: colors.square,
        padding: 20,
        fontSize: 22,
        borderRadius: 15,
        margin: 25
    },
    botao: {
        fontSize: 25,
        color: colors.white
    },
    textentrar: {
        color: '#76ADAD',
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 18
    },
    textnegrito: {
        fontWeight: '600',
        color: '#76ADAD'
    },
    textnegrito2: {
        fontWeight: '600',
        color: '#76ADAD',
        fontSize: 18
    }
});