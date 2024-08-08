import { useState } from 'react';
import { MessageTypes } from '../../navigations/message.navigation';
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer, colors } from "../../styles/globalstyles";
import { IMessage } from '../../services/data/Message';
import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';
import { apiMessage } from '../../services/data';
import { styles } from "./styles";

export function CadList({navigation}: MessageTypes) {
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function heandleChange(item: IMessage) {
        setData({ ...data, ...item });
    }
    async function handleCadList() {
        if (data?.title && data.message ) {
            setLoading(true)
            try {
                await apiMessage.store(data)
                Alert.alert("Tarefa cadastrada!")
                navigation.navigate('Tarefa')
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Prencha todos os campos")
        }
    }
    return (
        <View style={styles.flex}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Tarefa</Text>
                <View style={styles.formRow}>
                    <TextInput placeholderTextColor={colors.square} style={styles.input} placeholder='Título' onChangeText={(i) => heandleChange({ title: i })} />
                </View>
                <View style={styles.formRow}>
                    <TextInput placeholderTextColor={colors.square} style={styles.input} placeholder='Tarefa' onChangeText={(i) => heandleChange({ message: i })} />
                </View>
                <ButtonSlides onPressI={handleCadList} >
                    <Text>Enviar</Text>
                </ButtonSlides>
                <ButtonSlides onPressI={() => navigation.navigate('Tarefa')}>
                    <Text>Voltar</Text>
                </ButtonSlides>
            </KeyboardAvoidingView>
        </View>
    )
}