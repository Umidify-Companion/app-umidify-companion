import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { BlurView } from 'expo-blur';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	const handleLogin = () => {
		navigation.navigate('PrincipalTabs', { screen: 'Principal' });
	};

	return (
		<LinearGradient
			colors={['#36B0FD', '#FFFFFF']}
			start={{ x: 2, y: 0 }}
			end={{ x: 0, y: 1 }}
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
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
					overflow: 'hidden'
				}}
			>
				<ImageBackground
					source={require('../../assets/noise.png')}
					resizeMode="cover"
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
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
					<Image
						source={require('../../assets/logo/logo.png')}
						style={{ height: 120, width: 210 }}
					/>
					<View className="space-y-3">
						<TextInput
							mode="outlined"
							label="Email"
							activeOutlineColor="#36B0FD"
							value={email}
							onChangeText={setEmail}
							style={{ width: 230, height: 50, backgroundColor: 'white', borderRadius: 10 }}
							left={<TextInput.Icon icon="email" />}
						/>
						<TextInput
							mode="outlined"
							label="Senha"
							activeOutlineColor="#36B0FD"
							value={password}
							secureTextEntry={!showPassword}
							onChangeText={setPassword}
							style={{ width: 230, height: 50, backgroundColor: 'white', borderRadius: 10 }}
							right={
								<TextInput.Icon
									icon={showPassword ? "eye" : "eye-off"}
									onPress={() => setShowPassword(prev => !prev)}
								/>
							}
							left={<TextInput.Icon icon="lock" />}
						/>
					</View>
					<View className="flex mt-1 min-w-full ml-24 items-start flex-row space-x-1">
						<Text className="text-neutral-700">Esqueceu sua</Text>
						<Text onPress={() => navigation.navigate('EsqueciSenha')} className="text-[#36B0FD] font-semibold">senha?</Text>
					</View>
					<TouchableOpacity 
						onPress={handleLogin} 
						style={{
							backgroundColor: '#36B0FD',
							width: 162,
							height: 39,
							borderRadius: 20,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.3,
							shadowRadius: 4,
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 9
						}}
					>
						<Text className="text-white font-semibold text-lg">Entrar</Text>
					</TouchableOpacity>
					<View className="flex mt-1 items-start flex-row space-x-1">
						<Text className="text-neutral-700">Não possui uma</Text>
						<Text onPress={() => navigation.navigate('Registro')} className="text-[#36B0FD] font-semibold">conta?</Text>
					</View>
				</ImageBackground>
			</LinearGradient>
		</LinearGradient>
	);
};

export default Login;
