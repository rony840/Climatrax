import React from 'react';
import {} from 'react-native';
import { Weather } from "./src/screens/Screens";
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
  );
}

export default App;
