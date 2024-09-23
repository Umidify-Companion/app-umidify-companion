import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { BlurView } from 'expo-blur';

const Principal = ({ navigation }) => {

	const [text, setText] = React.useState("");

	const [textPassword, setTextPassword] = React.useState("");
	const [showPassword, setShowPassword] = useState(false)

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	return (
		<Text>oiii</Text>
	);
};
export default Principal;
