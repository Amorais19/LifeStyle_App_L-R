import { ImageBackground, View, Text } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page6({ setPageI }: IPagina) {
    const fundo = require('../../assets/fundo.png')
    return (
        <ImageBackground source={fundo} style={styleContainer.container}>
            <View style={styles.flex}>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>Life Style</Text>
                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.text}>Cadastre-se</Text>
                </View>
            </View>
        </ImageBackground>
    )
}