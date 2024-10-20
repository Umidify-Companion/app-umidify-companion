import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { Button } from 'react-native-paper';

const RecoveryPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleSendEmail = () => {
    // Lógica para enviar o email
    navigation.navigate('Sucesso');
  };

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
          <View className="absolute top-5 left-2">
            <Button
              icon="keyboard-backspace"
              buttonColor='transparent'
              textColor='#404040'
              mode="contained"
              onPress={() => navigation.navigate('Login')}
              accessibilityLabel="Voltar para a tela de login"
            >
              Voltar
            </Button>
          </View>
          <View className="space-y-4 p-5">
            <Text className="text-2xl font-bold text-neutral-700">Esqueceu sua senha?</Text>
            <Text className="text-lg text-neutral-700">
              Insira seu endereço de e-mail abaixo. Nós enviaremos um link para definir uma <Text className="text-[#36B0FD] font-semibold">nova senha.</Text>
            </Text>
            <TextInput
              mode="outlined"
              label="Email"
              activeOutlineColor="#36B0FD"
              value={email}
              className="w-[230px] h-[50px] bg-white rounded-lg"
              onChangeText={setEmail}
              left={<TextInput.Icon icon="email" />}
            />
          </View>
          <TouchableOpacity
            onPress={handleSendEmail}
            className="bg-[#36B0FD] w-[162px] h-[39px] rounded-xl shadow-lg flex items-center justify-center mt-9"
          >
            <Text className="text-white font-semibold text-lg">Enviar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </LinearGradient>
    </LinearGradient>
  );
};

export default RecoveryPassword;
