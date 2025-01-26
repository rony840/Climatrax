import { StyleSheet, View, FlatList, Text } from "react-native";
import { ForecastCard1 } from "../components/Components"; // Import your ForecastCard component
import Colors from "../assets/colors/Colors";

const HourlyForecast = ({ hourlyData }) => {

  // Function to format time to HH:MM (e.g., 9:00 AM)
  const formatTime = (hour) => {
    let time = new Date(hour * 60 * 60 * 1000); // Convert hour to milliseconds
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.forecastContainer}>
      <Text style={styles.headerText}>Hourly Forecast</Text>

      <FlatList
        data={hourlyData} // Pass the list of hourly data
        horizontal // Display items in a row
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ForecastCard1
            time={formatTime(item.hour)} // Format the time from the hour data
            weatherIcon={item.weatherIcon} // Weather icon for each hour
            temperature={item.temperature} // Temperature for each hour
          />
        )}
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    backgroundColor: Colors.semiOrange, // Background for the entire hourly forecast
    padding: 15,
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white, // Title color
    marginBottom: 10,
  },
});

export default HourlyForecast;
