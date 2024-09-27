import React, { useState, useRef } from 'react';
import { View, Text,  Dimensions, ImageBackground, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { Avatar } from 'react-native-paper';
import { Button } from 'react-native-paper';


const Principal = ({ navigation }) => {

	const [active, setActive] = React.useState('');

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	const data = [
		{ id: '1', text: 'Ligue o umidificador!', subtitle: 'O ambiente está seco demais.' },
		{ id: '2', text: 'Prepare um refresco!', subtitle: 'O ar está muito quente' }
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const flatListRef = useRef();

	const handleScroll = (event) => {
		const offsetX = event.nativeEvent.contentOffset.x;
		const currentPage = Math.round(offsetX / windowWidth);
		setCurrentIndex(currentPage);
	};

	return (
		<View className="flex-1 justify-center items-center">
			<LottieView
				source={require("../assets/umidity20.json")}
				style={{ width: "500%", height: "200%", position: 'absolute', zIndex: -1 }}
				autoPlay
				loop
			/>
			<View className="absolute min-h-full top-14 left-3">
				<View className="flex flex-row items-center space-x-2">
					<Avatar.Image size={40} source={require('../assets/fototeste.jpg')} />
					<Text className="text-lg text-white">Bem vindo, *nome*</Text>
				</View>
			</View>
			<View className="flex flex-row items-center justify-between min-w-full pl-12 pr-5">
				<View className="flex flex-col ml-[19px]">
					<Text className="text-3xl font-light text-white mb-3">Umidade</Text>
					<Text className="text-7xl font-black mt-1 text-white">20%</Text>
				</View>
				<LottieView
					source={require("../assets/desert.json")}
					style={{ width: "70%", height: "200%" }}
					autoPlay
					loop
				/>
			</View>

			<View className="flex flex-row w-[322px] mt-1 mb-10">
				<Text className="text-white text-lg">Temp. do ambiente: </Text>
				<Text className="font-black text-white text-lg">20°</Text>
			</View>

			<View className="space-y-7">
				{/* Dicas */}
				<LinearGradient
					colors={['rgba(255, 165, 0, 1)', 'rgba(255, 255, 255, 0.1)']} // Gradiente da borda com tons de laranja
					useAngle={true}
					angle={128.52}
					locations={[0, 1]}
					start={{ x: 1, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={{
						padding: 1, // Define o espaço entre o conteúdo e a borda
						height: windowHeight * 0.1 + 1, // Ajusta a altura incluindo o padding
						width: windowWidth * 0.8 + 1, // Ajusta a largura incluindo o padding
						borderRadius: 15, // Maior radius para incluir a borda
						overflow: 'hidden',
					}}
				>
					<LinearGradient
						colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
						useAngle={true}
						angle={128.52}
						locations={[0, 1]}
						start={{ x: 1, y: 0 }}
						end={{ x: 0, y: 1 }}
						style={{ height: windowHeight * 0.1, width: windowWidth * 0.8, alignItems: 'center', borderRadius: 15, overflow: 'hidden' }} // Estilos
					>
						<ImageBackground
							source={require('../assets/noise.png')}
							resizeMode="cover"
							style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
							imageStyle={{ borderRadius: 15, opacity: 0.6 }} // Para garantir que a imagem siga o borderRadius do card
						>
							<LinearGradient
								locations={[0, 1]}
								colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
								useAngle={true}
								angle={128.52}
								style={{ backgroundColor: "transparent", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)", alignItems: 'center', }}
							>
								{/* FlatList for horizontal swipe */}
								<FlatList
									data={data}
									ref={flatListRef}
									horizontal
									pagingEnabled
									onScroll={handleScroll}
									showsHorizontalScrollIndicator={false}
									keyExtractor={(item) => item.id}
									renderItem={({ item }) => (
										<View style={{ width: windowWidth * 0.8, justifyContent: 'center', alignItems: 'center' }}>
											<Text className="font-black text-[#fdfdfc] text-xl">{item.text}</Text>
											<Text className="font-light text-[#fdfdfc] mb-5">{item.subtitle}</Text>
										</View>
									)}
								/>

								{/* Pagination Dots */}
								<View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
									{data.map((_, index) => (
										<View
											key={index}
											style={{
												height: 7.5,
												width: 7.5,
												borderRadius: 5,
												margin: 5,
												backgroundColor: currentIndex === index ? '#FFFFFF' : '#f2f2f2'
											}}
										/>
									))}
								</View>
							</LinearGradient>
						</ImageBackground>
					</LinearGradient>
				</LinearGradient>

				{/* //Informações */}
				<LinearGradient
					colors={['rgba(255, 165, 0, 1)', 'rgba(255, 255, 255, 0.1)']} // Gradiente da borda com tons de laranja
					useAngle={true}
					angle={128.52}
					locations={[0, 1]}
					start={{ x: 1, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={{
						padding: 1, // Define o espaço entre o conteúdo e a borda
						height: windowHeight * 0.3 + 1, // Ajusta a altura incluindo o padding da outra seção
						width: windowWidth * 0.8 + 1, // Ajusta a largura incluindo o padding da outra seção
						borderRadius: 15, // Maior radius para incluir a borda
						overflow: 'hidden',
					}}
				>
					<LinearGradient
						colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
						useAngle={true}
						angle={128.52}
						locations={[0, 1]}
						start={{ x: 1, y: 0 }}
						end={{ x: 0, y: 1 }}
						style={{ height: windowHeight * 0.3, width: windowWidth * 0.8, alignItems: 'center', borderRadius: 15, overflow: 'hidden' }} // Ajusta o tamanho da nova seção
					>
						<ImageBackground
							source={require('../assets/noise.png')}
							resizeMode="cover"
							style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
							imageStyle={{ borderRadius: 15, opacity: 0.6 }} // Para garantir que a imagem siga o borderRadius do card
						>
							<LinearGradient
								locations={[0, 1]}
								colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
								useAngle={true}
								angle={128.52}
								style={{ backgroundColor: "transparent", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0)", alignItems: 'center', width: '100%', height: '100%' }}
							>
								<View className="absolute top-0 mt-3 justify-center items-center">
									<Text className="text-xl font-black mb-3 text-[#fdfdfc]">Histórico</Text>
									<View className="flex flex-row justify-between items-center space-x-4 mb-2 text-[#fdfdfc]">
										<Text className="w-1/4 text-left font-semibold text-[#fdfdfc]">Data</Text>
										<Text className="w-1/4 text-center font-semibold text-[#fdfdfc]">Min</Text>
										<Text className="w-1/4 text-right font-semibold text-[#fdfdfc]">Max</Text>
									</View>

									<View className="flex flex-row justify-between items-center space-x-4 mb-1">
										<Text className="w-1/4 text-left text-[#fdfdfc]">20/09/24</Text>
										<Text className="w-1/4 text-center text-[#fdfdfc]">20% / 30°</Text>
										<Text className="w-1/4 text-right text-[#fdfdfc]">30% / 30°</Text>
									</View>
								</View>

							</LinearGradient>
						</ImageBackground>
					</LinearGradient>
				</LinearGradient>
			</View>

			{/* Menu */}
			<View className="bg-black w-72 h-16 absolute bottom-4 rounded-3xl flex justify-center items-center opacity-60">
				<View className="flex flex-row space-x-3">
				<Button icon="home" textColor='#888888' onPress={() => console.log('Pressed')}/>
				<Button icon="cloud" textColor='#888888' onPress={() => console.log('Pressed')}/>
				<Button icon="cog-outline" textColor='#888888' onPress={() => console.log('Pressed')}/>
				</View>
			</View>
		</View>
	);
};
export default Principal;
