import React, {useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { LoginTypes } from '../../navigations/login.navigations';

export interface IAtuhenticate {
    email?: string;
    password?: string;
}

export function Page6({ navigation }: LoginTypes) {
    const fundo = require('../../assets/fundo.png')
    const [data, setData] = useState<IAtuhenticate>();
    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    function handleChange(item: IAtuhenticate) {
        setData({ ...data, ...item });
    }
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