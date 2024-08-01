import { ImageBackground, View, Text } from 'react-native';
import { styleContainer, colors } from "../../styles/globalstyles";
import { styles } from "./styles";
import { useAuth } from '../../hook/auth';

export function PageList() {
    const wallpapper = require('../../assets/wallpapper.png')
    const { user, signOut } = useAuth()
    return (
        <ImageBackground source={wallpapper} style={styleContainer.container}>
            <View style={styles.flex}>

            </View>
        </ImageBackground>
    )
}