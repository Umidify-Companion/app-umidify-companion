import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const Sucesso = ({ navigation }) => {

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	return (
		<LinearGradient
			colors={['#25AE88', '#FFFFFF']}
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
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
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
					<View className="flex justify-center items-center p-5 space-y-5">
						<Image className="h-[140px] w-[140px]" source={require('../assets/sucesso.png')}></Image>
						<Text className="text-5xl text-green-500 font-extrabold">Sucesso!</Text>
						<Text className="text-base text-center text-neutral-700">Um email de confirmação foi enviado a <Text className="text-[#36b0fd] font-semibold">*****@gmail.com</Text>, após confirmar, faça o processo de login novamente! aproveite nosso aplicativo!</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Login')} className="bg-[#36B0FD] w-[162px] h-[39px] rounded-xl shadow-lg flex items-center justify-center mt-9">
							<Text className="text-white font-semibold text-lg">Voltar ao Login</Text>
						</TouchableOpacity>
					</View>

				</ImageBackground>
			</LinearGradient>
		</LinearGradient>
	);
}

export default Sucesso;