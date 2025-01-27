import React, { createContext, useState, useContext, useEffect } from "react";
import { getForecast } from "../services/WeatherAPI"; // Assuming this is where you're fetching the data
import { useCity } from "../context/CityContext";

// Create the context
const ForecastContext = createContext();

// ForecastProvider component to wrap around your app
export const ForecastProvider = ({ children }) => {
  const [forecast, setForecast] = useState(null); // Store the entire weather data (hourly forecast)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [threeHourlyData, setHourlyData] = useState([]);
  const [fiveDayData, setDailyData] = useState([]);

  // Get the city from CityContext
  const { city } = useCity(); // This ensures the city from context is used

  // Function to fetch weather data
  const loadForecastData = async () => {
    if (!city) return; // Don't proceed if city is undefined or empty
    try {
      setLoading(true);
      const response = await getForecast(city); // Pass the city for fetching weather data
      const data = response.data;

      // Store the entire weather data (hourly forecast)
      setForecast(data.list);
      console.log('setForecastList:', data.list);

      // Process hourly data (3-hour intervals)
      const hourData = processThreeHourlyData(data.list);
      setHourlyData(hourData);

      // Process daily data
      const groupedDailyData = processFiveDayData(data.list);
      setDailyData(groupedDailyData);
      console.log('Grouped Daily Data:', groupedDailyData);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      loadForecastData(); // Fetch weather data when city is updated
    }
  }, [city]); // Trigger effect when city changes

  // Helper function to get the weather icon URL
  const getWeatherIcon = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`;

  // Process the hourly data (3-hour intervals)
const processThreeHourlyData = (weatherData) => {
  const currentDate = new Date();
  const currentTime = currentDate.getHours(); // Get the current hour (24-hour format)

  const threeHourlyData = weatherData
    .map(item => {
      const hour = new Date(item.dt_txt).getHours();
      const iconId = item.weather[0].icon;
      const temperature = Math.round(item.main.temp); // Round the temperature to nearest integer

      return {
        hour,
        weatherIcon: getWeatherIcon(iconId),
        temperature
      };
    })
    .filter(item => {
      const itemHour = item.hour;
      return itemHour >= currentTime && itemHour < currentTime + 12; // Show next 12 hours
    });

  console.log('ThreeHourlyData:', threeHourlyData);
  return threeHourlyData;
};

// Process the daily data (5-day forecast)
const processFiveDayData = (weatherData) => {
  const groupedByDay = weatherData.reduce((acc, item) => {
    const date = new Date(item.dt_txt);
    const dayName = date.toLocaleString('en-us', { weekday: 'short' });
    const tempMin = Math.round(item.main.temp_min); // Round the min temperature
    const tempMax = Math.round(item.main.temp_max); // Round the max temperature
    const iconId = item.weather[0].icon;

    if (!acc[dayName]) {
      acc[dayName] = { temps: [], iconId };
    }

    acc[dayName].temps.push({ tempMin, tempMax });
    return acc;
  }, {});

  const fiveDayData = [];
  for (const [day, { temps, iconId }] of Object.entries(groupedByDay)) {
    const highTemp = Math.max(...temps.map(t => t.tempMax)); // Already rounded values
    const lowTemp = Math.min(...temps.map(t => t.tempMin)); // Already rounded values

    fiveDayData.push({
      day,
      weatherIcon: getWeatherIcon(iconId),
      highTemp,
      lowTemp
    });
  }

  console.log('FiveDayData:', fiveDayData);
  return fiveDayData;
};


  // Create the ForecastContext provider
  return (
    <ForecastContext.Provider
      value={{
        forecast,
        loading,
        error,
        threeHourlyData,
        fiveDayData,
        loadForecastData,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

// Custom hook to use the ForecastContext
export const useForecast = () => useContext(ForecastContext);
