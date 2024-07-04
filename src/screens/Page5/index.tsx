import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer, colors } from "../../styles/globalstyles";
import { styles } from "./styles"
import { LoginTypes } from '../../navigations/login.navigations';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Page5({ navigation }: LoginTypes) {
    const fundo = require('../../assets/fundo.png')
    const [data, setData] = useState<IRegister>();
    async function handleRegister(){
        if (data?.email && data.name && data.password) {
            console.log(data)
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
            <View style={styles.cadastro}>
                    <Text style={styles.text}>Cadastre-se</Text>
                    <View style={styles.space}>
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Nome:' onChangeText={(i) => handleChange({ name: i})} />
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Email:' keyboardType='email-address' autoCapitalize='none' onChangeText={(i) => handleChange({ email: i})} />
                        <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Senha:' secureTextEntry={true} autoCapitalize='none' onChangeText={(i) => handleChange({ name:i})} />
                    </View>
            </View>
        </ImageBackground>
    )
}