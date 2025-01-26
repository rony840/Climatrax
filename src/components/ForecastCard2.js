import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../assets/colors/Colors"; // Customize the colors as needed

const ForecastCard2 = ({ day, weatherIcon, highTemp, lowTemp }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Day of the week */}
      <Text style={styles.dayText}>{day}</Text>

      {/* Weather Icon */}
      <Image 
        source={weatherIcon} // Pass in a dynamic weather icon source
        style={styles.weatherIcon}
      />

      {/* High/Low Temperature */}
      <View style={styles.tempContainer}>
        <Text style={styles.highTempText}>H: {highTemp}°</Text>
        <Text style={styles.lowTempText}>L: {lowTemp}°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.transparent, // Transparent or any background color you prefer
    padding: 10,
    marginBottom: 15, // Space between each card
    borderRadius: 10,
    width: 120, // Adjust width for the card
    flexDirection:'row',
    alignContent:'space-evenly'
  },
  dayText: {
    fontSize: 26,
    color: Colors.white, // Color for the day of the week text
    marginBottom: 5,
  },
  weatherIcon: {
    marginLeft:50,
    width: 40, // Adjust based on the size you need
    height: 40, // Adjust based on the size you need
    tintColor: Colors.white, // Optional: Change icon color
  },
  tempContainer: {
    marginLeft:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  highTempText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white, // High temperature color
  },
  lowTempText: {
    marginLeft:10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white, // Low temperature color
  },
});

export default ForecastCard2;
