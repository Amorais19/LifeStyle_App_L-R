import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { IPagina } from "../../../App";

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Page5({ setPageI }: IPagina) {
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
                    <TextInput ></TextInput>
            </View>
        </ImageBackground>
    )
}