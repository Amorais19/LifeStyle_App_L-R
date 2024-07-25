import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer, colors } from "../../styles/globalstyles";
import { styles } from "./styles"
import { LoginTypes } from '../../navigations/login.navigations';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Page5({ navigation }: LoginTypes) {
    const fundo = require('../../assets/fundo.png')
    const [data, setData] = useState<IRegister>();
    const { setLoading } = useAuth()
    async function handleRegister(){
        if (data?.email && data.name && data.password) {
            try {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} Cadastrado!`)
                navigation.navigate("Login")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    return (
        <ImageBackground source={fundo} style={styleContainer.container}>
            <View style={styles.flex}>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>Life Style</Text>
                </View>
            </View>
            <KeyboardAvoidingView style={styles.cadastro}>
                <View style={styles.cad}>
                    <Text style={styles.text}>Cadastre-se</Text>
                    <View style={styles.textinput}>
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Nome' onChangeText={(i) => handleChange({ name: i})} />
                    </View>
                    <View style={styles.textinput}>
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Email' keyboardType='email-address' autoCapitalize='none' onChangeText={(i) => handleChange({ email: i})} />
                    </View>
                    <View style={styles.textinput}>
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Senha' secureTextEntry={true} autoCapitalize='none' onChangeText={(i) => handleChange({ password:i})} />
                    </View>
                    <View>
                        <ButtonSlides onPressI={handleRegister}>
                            <Text style={styles.botao}>Concluir</Text>
                        </ButtonSlides>
                        <Text style={styles.textentrar}>Já possui conta? <ButtonEntrar onPressI={handleGoBack}><Text style={styles.textnegrito}>Entrar</Text></ButtonEntrar></Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}