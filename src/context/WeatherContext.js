import React, { createContext, useState, useContext, useEffect } from "react";
import { getWeather } from "../services/WeatherAPI"; // Assuming this is where you're fetching the data
import { useCity } from "../context/CityContext";

const WeatherContext = createContext();

// Create WeatherProvider
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extracted data states
  const [temp, setTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [highTemp, setHighTemp] = useState(null);
  const [lowTemp, setLowTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  // Get the city from CityContext
  const { city } = useCity(); // This ensures the city from context is used

  // Function to fetch weather data
  const loadWeatherData = async () => {
    if (!city) return; // Don't proceed if city is undefined or empty
    try {
      setLoading(true);
      const response = await getWeather(city); // Pass the city for fetching weather data
      const data = response.data;

      // Extract and set individual values
      setWeather(data); // Store the entire weather data
      setTemp(data.main.temp);
      setWindSpeed(data.wind.speed);
      setHighTemp(data.main.temp_max);
      setLowTemp(data.main.temp_min);
      setHumidity(data.main.humidity);
      setWeatherStatus(data.weather[0].description);
      const date1 = new Date(data.dt * 1000); // Convert UNIX timestamp to milliseconds
      const time1 = date1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Format: 7:30 PM
      const formattedDate = date1.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Format: Jan 26
      setDate(formattedDate);
      setTime(time1);
      const iconId = data.weather[0].icon;
      const iconURL = `https://openweathermap.org/img/wn/${iconId}.png`;
      setWeatherIcon(iconURL);
    } 
    catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      loadWeatherData(); // Fetch weather data when city is updated
    }
  }, [city]); // Trigger effect when city changes

  // Create WeatherContext
  return (
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        error,
        temp,
        windSpeed,
        highTemp,
        lowTemp,
        humidity,
        weatherStatus,
        date,
        time,
        weatherIcon,
        loadWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the WeatherContext
export const useWeather = () => useContext(WeatherContext);
