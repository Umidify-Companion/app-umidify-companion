import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, ImageBackground, FlatList } from "react-native";
import PrincipalMenu from '../components/PrincipalMenu';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const PrincipalConfigurations = ({ navigation }) => {

    return (
        <View className="flex-1 justify-center items-center bg-[#202020]">
            <Text className="text-white absolute top-14">Configurações</Text>

            <View className="flex flex-col space-y-10">
                <View className="bg-[#484848] p-6 w-64 rounded-xl">
                    <View className="flex flex-col justify-center items-center">
                        <MaterialIcons name="sensors" size={50} color="white" />
                        <Text className="text-white text-xl font-bold mt-2">Configurar sensor</Text>
                        <Text className="text-white text-sm font-light text-center">Configure seu sensor para obter os dados do seu ambiente.</Text>
                    </View>
                </View>

                <View className="bg-[#484848] p-6 w-64 rounded-xl">
                    <View className="flex flex-col justify-center items-center">
                        <FontAwesome6 name="map-location-dot" size={50} color="white" />
                        <Text className="text-white text-xl font-bold mt-2">Configurar localização</Text>
                        <Text className="text-white text-sm font-light text-center">Adicione sua localização para ter dados do tempo.</Text>
                    </View>
                </View>
            </View>

            <Text className="text-white absolute bottom-32">Não é *Usuário*? <Text className="text-[#36B0FD]">Encerrar sessão</Text></Text>

            {/* //Menu */}
            <PrincipalMenu navigation={navigation} />
        </View>
    );
};
export default PrincipalConfigurations;
