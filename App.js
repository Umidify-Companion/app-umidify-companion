import Login from './src/screens/Login'
import EsqueciSenha from './src/screens/EsqueciSenha'
import Sucesso from './src/screens/Sucesso'
import Registro from './src/screens/Registro'
import Principal from './src/screens/Principal'
import PrincipalWeather from './src/screens/PrincipalWeather'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const HomeStack = createNativeStackNavigator();

function PrincipalTabs() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ headerShown: false }} name="Principal" component={Principal} />
      <HomeStack.Screen options={{ headerShown: false }} name="PrincipalWeather" component={PrincipalWeather} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen options={{ headerShown: false }} name="Sucesso" component={Sucesso} />
        <Stack.Screen options={{ headerShown: false }} name="Registro" component={Registro} />
        <Stack.Screen options={{ headerShown: false }} name="PrincipalTabs" component={PrincipalTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
