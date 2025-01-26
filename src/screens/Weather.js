import { SafeAreaView, StyleSheet, View } from "react-native";
import { CityCard, Header, HourlyForecast, WeatherCard, TenDayForecast} from "../components/Components";
import Colors from "../assets/colors/Colors";

const Weather = props =>{
    const {text} = props;
    let username = "Ronit";
    let greetMsg = "Good Morning";
    let time = "8:30 PM";
    let date = "Jan 25";
    const hourlyData = [
        { hour: 0, weatherIcon: require('../assets/icons/cloudy.png'), temperature: 22 },
        { hour: 1, weatherIcon: require('../assets/icons/cloudy.png'), temperature: 21 },
        { hour: 2, weatherIcon: require('../assets/icons/cloudy.png'), temperature: 20 },
        { hour: 3, weatherIcon: require('../assets/icons/cloudy.png'), temperature: 19 },
        { hour: 4, weatherIcon: require('../assets/icons/cloudy.png'), temperature: 18 },
      ];
      const dailyData = [
        { day: "Mon", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 24, lowTemp: 16 },
        { day: "Tue", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 22, lowTemp: 18 },
        { day: "Wed", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 20, lowTemp: 17 },
        { day: "Thu", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 25, lowTemp: 19 },
        { day: "Fri", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 21, lowTemp: 15 },
        { day: "Sat", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 19, lowTemp: 14 },
        { day: "Sun", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 27, lowTemp: 18 },
        { day: "Mon", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 22, lowTemp: 16 },
        { day: "Tue", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 20, lowTemp: 17 },
        { day: "Wed", weatherIcon: require('../assets/icons/cloudy.png'), highTemp: 24, lowTemp: 18 },
      ];
    return(
    <SafeAreaView style={styles.screenContainer}>
        <WeatherCard/>
        <HourlyForecast hourlyData={hourlyData} />
        <TenDayForecast dailyData={dailyData} />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        backgroundColor:Colors.Orange,
    }
});

export default Weather;