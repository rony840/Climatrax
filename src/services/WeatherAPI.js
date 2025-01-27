import axios from "axios";
import { WEATHER_API_KEY } from "../constants/Constants";

// Fetch current weather data
export const getWeather = async (city) => {
  try {
    console.log('city:',city)
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    console.log('data1:',res.data)
    return { success: true, data: res.data };
  } catch (e) {
    console.error("Error fetching weather data from api:", e.message);
    return { success: false, data: null };
  }
};

// Fetch forecast data for 5 days with 3-hour intervals
export const getForecast = async (city) => {
  try {
    let res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    console.log('data2:',res2.data)
    return { success: true, data: res2.data };
  } catch (e) {
    console.error("Error fetching forecast data from api:", e.message);
    return { success: false, data: null };
  }
};
