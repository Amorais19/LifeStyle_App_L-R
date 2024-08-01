import { ImageBackground, View, Text } from 'react-native';
import { styleContainer, colors } from "../../styles/globalstyles";
import { styles } from "./styles";
import { useAuth } from '../../hook/auth';

export function PageInicio() {
    const wallpapper = require('../../assets/wallpapper.png')
    const { user, signOut } = useAuth()
    return (
        <ImageBackground source={wallpapper} style={styleContainer.container}>
            <View style={styles.flex}>
                <View>
                    <Text>Life Style</Text>
                </View>
                <View>

                </View>
            </View>
        </ImageBackground>
    )
}