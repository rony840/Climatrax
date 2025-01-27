import { SafeAreaView, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { ThreeHourForecast, WeatherCard, FiveDayForecast} from "../components/Components";
import Colors from "../assets/colors/Colors";
import { useForecast } from "../context/ForecastContext";

const Weather = props =>{
    const { loading, error, threeHourlyData, fiveDayData } = useForecast();
    if (loading) {
              return (<View>
                <ActivityIndicator/>
                <Text>Loading...</Text>
              </View>
                );
          }
      
      if (error) {
          return <Text>Error: {error}</Text>;
      }

    return(
    <SafeAreaView style={styles.screenContainer}>
        <WeatherCard/>
        <ThreeHourForecast hourlyData={threeHourlyData} />
        <FiveDayForecast dailyData={fiveDayData} />
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