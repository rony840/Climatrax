import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Weather, Search} from '../screens/Screens';
// Stack Navigator for Login, Signup, and Welcome (Static Flow)
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Weather" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Weather"component={Weather}/>
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
      <RootStack />
  );
};

export default AppNavigation;
