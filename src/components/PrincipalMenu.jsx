import React from 'react';
import { View } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';
import { styled } from 'nativewind';

const PrincipalMenu = ({ navigation }) => {
    return (
        <View className="w-72 h-16 absolute bottom-4 rounded-3xl flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <View className="flex flex-row space-x-6">
                <IconButton icon="home" iconColor={MD3Colors.primary100} onPress={() => navigation.navigate('PrincipalTabs', { screen: 'Principal' })} />
                <IconButton icon="cloud" iconColor={MD3Colors.primary100} onPress={() => navigation.navigate('PrincipalTabs', { screen: 'PrincipalWeather' })} />
                <IconButton icon="cog-outline" iconColor={MD3Colors.primary100} onPress={() => navigation.navigate('PrincipalTabs', { screen: 'PrincipalConfigurations' })} />
            </View>
        </View>
    );
};
export default PrincipalMenu;
