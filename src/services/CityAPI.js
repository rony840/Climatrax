import axios from 'axios';
import { WEATHER_API_KEY } from '../constants/Constants'; // Make sure to update the API Key import path

export const getCitySuggestions = async (query) => {
  try {
    // Check if the query exists
    if (!query) return { success: false, data: [], message: 'Query cannot be empty.' };

    // Make the request to OpenWeatherMap
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=10&appid=${WEATHER_API_KEY}`
    );

    // Check if response data exists and return success status
    if (response.data && response.data.list) {
      return { success: true, data: response.data.list }; // The list of city suggestions
    } else {
      return { success: false, data: [], message: 'No cities found' };
    }
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return { success: false, data: [], message: error.message || 'Something went wrong' };
  }
};
