import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350
    },
    conteudo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 40
    },
    title: {
        fontFamily: 'Slackey_400Regular',
        fontSize: 48,
        color: colors.white,
        paddingBottom: 30
    },
    texto: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 24
    },
    textfont: {
        color: colors.white,
        fontFamily: 'Slackey_400Regular'
    },
    cont: {
        marginBottom: -30,
        paddingBottom: -20
    },
    botoes: {
        flexDirection: 'row',
        marginBottom: 25
    },
    botao: {
        paddingHorizontal: 15
    },
    botaoregis: {
        color: colors.white,
        fontSize: 25
    },
    textentrar: {
        color: colors.white,
        textAlign: 'center',
        paddingTop: 5
    },
    textnegrito: {
        fontWeight: '600',
        color: colors.white
    }
});