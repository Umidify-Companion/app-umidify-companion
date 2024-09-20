import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { Button } from 'react-native-paper';

const EsqueciSenha = ({ navigation }) => {

	const [text, setText] = React.useState("");

	const [textPassword, setTextPassword] = React.useState("");
	const [showPassword, setShowPassword] = useState(false)

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	return (
		<LinearGradient
			colors={['#36B0FD', '#FFFFFF']}
			start={{ x: 2, y: 0 }}
			end={{ x: 0, y: 1 }}
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} // Estilos
		>
			<LinearGradient
				colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.6)']}
				start={{ x: 2, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={{ height: windowHeight * 0.6, width: windowWidth * 0.8, alignItems: 'center', borderRadius: 15, overflow: 'hidden' }} // Estilos
			>
				<ImageBackground
					source={require('../assets/noise.png')}
					resizeMode="cover"
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
					imageStyle={{ borderRadius: 15, opacity: 0.5 }} // Para garantir que a imagem siga o borderRadius do card
				>
					<BlurView
						intensity={90} // Ajuste a intensidade do blur aqui
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							borderRadius: 15, // Certifique-se de que o blur tenha o mesmo borderRadius
						}}
					/>
					<View className="absolute top-5 left-2">
						<Button icon="keyboard-backspace" buttonColor='transparent' textColor='#404040' mode="contained" onPress={() => navigation.navigate('Login')}>
							Voltar
						</Button>
					</View>
					<View className="space-y-4 p-5">
						<Text className="text-2xl font-bold text-neutral-700">Esqueceu sua senha?</Text>
						<Text className="text-lg">Insira seu endereço de e-mail abaixo. Nós enviaremos um link para definir uma <Text className="text-[#36B0FD]">nova senha.</Text></Text>
						<TextInput
							mode="outlined"
							label="Email"
							activeOutlineColor="#36B0FD"
							value={text}
							className="w-[230px] h-[50px] bg-white rounded-lg"
							onChangeText={text => setText(text)}
							left={<TextInput.Icon icon="email" />}
						/>
					</View>
					<TouchableOpacity className="bg-[#36B0FD] w-[162px] h-[39px] rounded-xl shadow-lg flex items-center justify-center mt-9">
						<Text className="text-white font-semibold text-lg">Enviar</Text>
					</TouchableOpacity>
				</ImageBackground>
			</LinearGradient>
		</LinearGradient>
	);
};
export default EsqueciSenha;
