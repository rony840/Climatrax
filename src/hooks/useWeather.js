import { useEffect, useState } from "react";
import { getWeather } from "../services/WeatherAPI";

export const useWeather = cityName => {
    const [weather, setWeather] = useState (null);
    const loadData = async () => {
        console.log("Fetching weather data for:", cityName);
        const weather = await getWeather(cityName);
        setWeather(weather);
        console.log('weather in hook:',weather);
    };
    useEffect(
        ()=>{
            loadData();
            },
        [cityName]
    );
    return [weather];
}
export default useWeather;