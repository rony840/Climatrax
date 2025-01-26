import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../assets/colors/Colors";

const WeatherStatus = (props) => {
  const { text } = props;

  return (
    <View style={styles.container}>
      {/* Weather Icon */}
      <Image
        style={styles.icon}
        source={require('../assets/icons/cloudy.png')} // Ensure the path is correct
      />
      {/* Weather Status Text */}
      <Text style={styles.text1}>
        {text || "Weather Status Text"} {/* Fallback text if no prop is passed */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',          // Align items horizontally
    alignItems: 'center',          // Center align icon and text vertically
    backgroundColor: 'transparent', // You can change this to the desired background color
                     // Add some padding for spacing
  },
  icon: {
    height: 40,                    // Increase the size of the icon for visibility
    width: 40,
    marginRight: 10,               // Add space between the icon and the text
    tintColor: Colors.white,             // Set the icon color if you want (adjust as needed)
  },
  text1: {
    fontSize: 20,                  // Set a reasonable font size for the text
    color: 'black',                // Text color (you can adjust this)
    fontWeight: 'bold', 
    textAlign: 'right',           // Make the text bold (optional)
    color: Colors.statDisp,
  },
});

export default WeatherStatus;
