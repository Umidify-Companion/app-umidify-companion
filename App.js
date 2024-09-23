import Login from './src/screens/Login'
import EsqueciSenha from './src/screens/EsqueciSenha'
import Sucesso from './src/screens/Sucesso'
import Registro from './src/screens/Registro'
import Principal from './src/screens/Principal'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen options={{ headerShown: false }} name="Sucesso" component={Sucesso} />
        <Stack.Screen options={{ headerShown: false }} name="Registro" component={Registro} />
        <Stack.Screen options={{ headerShown: false }} name="Principal" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
