import React, {useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, Text, TextInput, Alert } from "react-native";
import { ButtonEntrar, ButtonSlide, ButtonSlides } from "../../components/ButtonSlide";
import { styleContainer, colors } from "../../styles/globalstyles";
import { styles } from "./styles"
import { LoginTypes } from '../../navigations/login.navigations';
import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';

export interface IAtuhenticate {
    email?: string;
    password?: string;
}

export function Page6({ navigation }: LoginTypes) {
    const fundo = require('../../assets/fundo.png')
    const [data, setData] = useState<IAtuhenticate>();
    const { signIn, setLoading } = useAuth()
    async function handleSignIn() {
        if (data?.email && data.password) {
            setLoading(true)
            try {
                await signIn(data)
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
                            <Text style={styles.textentrar}>Não possui conta? <ButtonEntrar onPressI={handleRegister}><Text style={styles.textnegrito}>Cadastrar-se</Text></ButtonEntrar> </Text>
                        </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}