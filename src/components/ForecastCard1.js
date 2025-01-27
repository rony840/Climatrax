import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../assets/colors/Colors"; // Customize the colors as needed

const ForecastCard1 = ({ time, weatherIcon, temperature }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Display time */}
      <Text style={styles.timeText}>{time}</Text>

      {/* Weather Icon */}
      <Image 
        source={{uri:weatherIcon}} // Pass in a dynamic weather icon source
        style={styles.weatherIcon}
      />

      {/* Temperature */}
      <Text style={styles.tempText}>{temperature}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.transparent, // You can use a color or transparency
    padding: 10,
    marginRight: 15, // Space between cards
    borderRadius: 10,
    width: 80, // Adjust width for the card
  },
  timeText: {
    fontSize: 14,
    color: Colors.white, // Change to your desired text color
    marginBottom: 5,
  },
  weatherIcon: {
    width: 30, // Adjust based on the size you need
    height: 30, // Adjust based on the size you need
    tintColor: Colors.white, // Optional: Change icon color
  },
  tempText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white, // Text color for temperature
    marginTop: 5,
  },
});

export default ForecastCard1;
