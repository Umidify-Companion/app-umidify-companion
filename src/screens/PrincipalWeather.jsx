import React, { useEffect, useRef } from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import LottieView from 'lottie-react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import PrincipalMenu from '../components/PrincipalMenu';


const PrincipalWeather = ({ navigation }) => {


	return (
		<View className="flex-1 justify-center items-center bg-[#202020]">
			<Text className="text-white absolute top-14">Temperatura geral</Text>
			<LottieView
				source={require("../assets/principalWeatherAssets/background.json")}
				style={{ width: "100%", height: "30%" }}
				autoPlay
				loop
			/>
			<View className="flex flex-row space-x-1 justify-center items-center">
				<EvilIcons name="location" size={24} color="white" />
				<Text className="text-white">Localizado em <Text className="text-white font-black">Amparo, São Paulo</Text></Text>
			</View>

			{/* //Temperatura */}
			<View className="flex flex-col items-center mt-6">
				<Text className="text-white text-7xl">30°c</Text>
				<View className="flex flex-row space-x-1 items-center">
					<Feather name="sun" size={20} color="white" />
					<Text className="text-white">O clima está <Text className="font-black">ensolarado</Text></Text>
				</View>
			</View>

			{/* Especificações do clima */}
			<View className="flex flex-row space-x-9 mt-6">
				<View className="flex flex-row items-center space-x-1">
					<Feather name="wind" size={24} color="white" />
					<Text className="text-white">11km/h</Text>
				</View>
				<View className="flex flex-row items-center space-x-1">
					<Ionicons name="water" size={24} color="white" />
					<Text className="text-white">40%</Text>
				</View>
				<View className="flex flex-row items-center space-x-1">
					<Feather name="sunrise" size={24} color="white" />
					<Text className="text-white">6:00 AM</Text>
				</View>
			</View>

			{/* Espectativas para o clima */}
			<View className="mt-6">
				<View className="flex flex-row space-x-2 items-center ml-3 mb-3">
					<Feather name="clock" size={20} color="white" />
					<Text className="text-white text-lg">Previsão para o dia</Text>
				</View>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem
					style={{ flexGrow: 0 }}
				>
					<View className="flex flex-row space-x-3 pl-3 pr-3">
						<View className="h-44 w-36 bg-[#484848] rounded-xl flex flex-col items-center justify-center">
							<Feather name="cloud" size={70} color="white" />
							<Text className="text-white text-base font-light">Agora:</Text>
							<Text className="text-white text-2xl">29°c</Text>
						</View>
						<View className="h-44 w-36 bg-[#484848] rounded-xl flex flex-col items-center justify-center">
							<Feather name="cloud" size={70} color="white" />
							<Text className="text-white text-base font-light">16:00</Text>
							<Text className="text-white text-2xl">29°c</Text>
						</View>
						<View className="h-44 w-36 bg-[#484848] rounded-xl flex flex-col items-center justify-center">
							<Feather name="cloud-drizzle" size={70} color="white" />
							<Text className="text-white text-base font-light">17:00</Text>
							<Text className="text-white text-2xl">29°c</Text>
						</View>
						<View className="h-44 w-36 bg-[#484848] rounded-xl flex flex-col items-center justify-center">
							<Feather name="cloud-snow" size={70} color="white" />
							<Text className="text-white text-base font-light">18:00</Text>
							<Text className="text-white text-2xl">29°c</Text>
						</View>
					</View>
				</ScrollView>
			</View>

			{/* //Menu */}
			<PrincipalMenu navigation={navigation} />
		</View>
	);
};
export default PrincipalWeather;
