import { StyleSheet, View, FlatList, Text } from "react-native";
import { ForecastCard2 } from "../components/Components"; // Import the ForecastCard component
import Colors from "../assets/colors/Colors";

const TenDayForecast = ({ dailyData }) => {
  
  return (
    <View style={styles.forecastContainer}>
      <Text style={styles.headerText}>10-Day Forecast</Text>

      <FlatList
        data={dailyData} // Pass the list of daily data
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ForecastCard2
            day={item.day} // Day of the week (e.g., "Monday")
            weatherIcon={item.weatherIcon} // Weather icon for each day
            highTemp={item.highTemp} // High temperature for each day
            lowTemp={item.lowTemp} // Low temperature for each day
          />
        )}
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    backgroundColor: Colors.semiOrange, // Background for the entire 10-day forecast
    padding: 15,
    marginBottom: 20,
    height: 260,
    borderRadius:30,
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white, // Title color
    marginBottom: 10,
  },
});

export default TenDayForecast;
