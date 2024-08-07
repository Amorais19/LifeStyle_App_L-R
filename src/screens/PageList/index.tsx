import { ImageBackground, View, Text, FlatList } from 'react-native';
import { styleContainer, colors } from "../../styles/globalstyles";
import { useEffect, useState } from 'react';
import { apiMessage } from '../../services/data';
import { IResponseMessage } from '../../services/data/Message';
import { styles } from "./styles";
import { useAuth } from '../../hook/auth';

export function PageList() {
    const wallpapper = require('../../assets/wallpapper.png')
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        loadMessage()
    }, [])

    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return (
        <ImageBackground source={wallpapper} style={styleContainer.container}>
            <View style={styles.flex}>
                {
                    message.length > 0 && (
                        <FlatList 
                        data={message} 
                        renderItem={renderItem} 
                        keyExtractor={(item) => String(item.id)} />
                    )
                }
            </View>
        </ImageBackground>
    )
}