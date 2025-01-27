import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation'; // Correct path
import { WeatherProvider } from './src/context/WeatherContext';
import { CityProvider } from './src/context/CityContext';
import { ForecastProvider } from './src/context/ForecastContext';

function App(): React.JSX.Element {
  return (
    <CityProvider>  {/* Wraps the app with City context */}
      <WeatherProvider> {/* Wraps the app with Weather context */}
        <ForecastProvider>
        <NavigationContainer>
          <AppNavigation /> {/* Your navigation structure */}
        </NavigationContainer>
        </ForecastProvider>
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
