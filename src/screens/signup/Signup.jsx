import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Checkbox } from 'react-native-paper';
import { BlurView } from 'expo-blur';

const Signup = ({ navigation }) => {
    const [textNome, setTextNome] = useState("");
    const [textEmail, setTextEmail] = useState("");
    const [textPassword, setTextPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const windowDimensions = Dimensions.get('window');
    const windowWidth = windowDimensions.width;
    const windowHeight = windowDimensions.height;

    return (
        <LinearGradient
            colors={['#36B0FD', '#FFFFFF']}
            start={{ x: 2, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1 justify-center items-center"
        >
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.6)']}
                start={{ x: 2, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                    height: windowHeight * 0.6,
                    width: windowWidth * 0.8,
                    alignItems: 'center',
                    borderRadius: 15,
                    overflow: 'hidden',
                }}
            >
                <ImageBackground
                    source={require('../../assets/noise.png')}
                    resizeMode="cover"
                    className="flex-1 justify-center items-center"
                    imageStyle={{ borderRadius: 15, opacity: 0.5 }}
                >
                    <BlurView
                        intensity={90}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 15,
                        }}
                    />
                    <View className="flex justify-center items-center p-10">
                        <Text className="text-3xl font-bold mb-2 text-neutral-700">Registrar</Text>
                        <View className="flex justify-center items-center space-y-3">
                            <TextInput
                                mode="outlined"
                                label="Nome"
                                activeOutlineColor="#36B0FD"
                                value={textNome}
                                className="w-[230px] h-[50px] bg-white rounded-lg"
                                onChangeText={setTextNome}
                                left={<TextInput.Icon icon="account" />}
                            />
                            <TextInput
                                mode="outlined"
                                label="Email"
                                activeOutlineColor="#36B0FD"
                                value={textEmail}
                                className="w-[230px] h-[50px] bg-white rounded-lg"
                                onChangeText={setTextEmail}
                                left={<TextInput.Icon icon="email" />}
                            />
                            <TextInput
                                mode="outlined"
                                label="Senha"
                                activeOutlineColor="#36B0FD"
                                value={textPassword}
                                secureTextEntry={!showPassword}
                                className="w-[230px] h-[50px] bg-white rounded-lg"
                                onChangeText={setTextPassword}
                                right={
                                    <TextInput.Icon
                                        icon={showPassword ? "eye" : "eye-off"}
                                        onPress={() => setShowPassword(!showPassword)}
                                    />
                                }
                                left={<TextInput.Icon icon="lock" />}
                            />
                            <View className="flex flex-row items-center">
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    color='#36B0FD'
                                    onPress={() => setChecked(!checked)}
                                />
                                <Text className="text-neutral-700">Ao me cadastrar, eu concordo com os termos.</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Sucesso')}
                            className="bg-[#36B0FD] w-[162px] h-[39px] rounded-xl shadow-lg flex items-center justify-center mt-9"
                        >
                            <Text className="text-white font-semibold text-lg">Cadastrar</Text>
                        </TouchableOpacity>
                        <Text className="mt-1 text-neutral-700">
                            Já possui uma conta? 
                            <Text 
                                onPress={() => navigation.navigate('Login')} 
                                className="text-[#36B0FD] font-semibold"
                            >
                                Fazer login
                            </Text>
                        </Text>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </LinearGradient>
    );
};

export default Signup;