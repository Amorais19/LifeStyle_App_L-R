import { ImageBackground, View, Text } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page4({ setPageI }: IPagina) {
    const fundo = require('../../assets/fundo.png')
    return (
        <ImageBackground source={fundo} style={styleContainer.container}>
            <View style={styles.flex}>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>Life Style</Text>
                    <Text style={styles.texto}>Seja bem-vindo ao <Text style={styles.textfont}>Life Style</Text>!
                        Aqui você consegue se manter organizado utilizando nossas mais fáceis ferramentas de uso diário.</Text>
                </View>
                <View style={styles.cont}>
                    <ButtonSlides onPressI={() => setPageI(5)}>
                        <Text style={styles.botaoregis}>Registre-se</Text>
                    </ButtonSlides>
                    <Text style={styles.textentrar}>Já possui conta? <ButtonEntrar onPressI={() => setPageI(6)}><Text style={styles.textnegrito}>Entrar</Text></ButtonEntrar></Text>
                </View>
            </View>
            <View style={styles.botoes}>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={true} />
                </View>
            </View>
        </ImageBackground>
    )
}