import React, {useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer, colors } from "../../styles/globalstyles";
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
        navigation.navigate('Register')
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
            </View>
            <KeyboardAvoidingView style={styles.cadastro}>
                <View style={styles.cad}>
                        <Text style={styles.text}>Login</Text>
                        <Text style={styles.textentrar}>Olá seja <Text style={styles.textnegrito}>bem vindo(a)</Text> de volta.</Text>
                        <View>
                            <View style={styles.textinput}>
                                <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Email' keyboardType='email-address' autoCapitalize='none' onChangeText={(i) => handleChange({ email: i})} />
                            </View>
                            <View style={styles.textinput}>
                                <TextInput placeholderTextColor={colors.white} style={styles.input} placeholder='Senha' secureTextEntry={true} autoCapitalize='none' onChangeText={(i) => handleChange({ password:i})} />
                            </View>
                        </View>
                        <View>
                            <ButtonSlides onPressI={handleSignIn}><Text style={styles.botao}>Concluir</Text></ButtonSlides>
                            <Text style={styles.textentrar}>Não possui conta? </Text>
                            <ButtonEntrar onPressI={handleRegister}><Text style={styles.textnegrito2}>Cadastrar-se</Text></ButtonEntrar>
                        </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}