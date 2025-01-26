import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../assets/colors/Colors";

const WeatherElements = (props) => {
  const { text, showIcon } = props; // Destructure the showIcon prop

  return (
    <View style={styles.container}>
      {/* Conditionally render the Weather Icon */}
      {showIcon && (
        <Image
          style={styles.icon}
          source={require('../assets/icons/cloudy.png')} // Ensure the path is correct
        />
      )}
      
      {/* Weather Status Text */}
      <Text style={styles.text1}>
        {text || "2.4 km/h"} {/* Fallback text if no prop is passed */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',          // Align items horizontally
    alignItems: 'center',          // Center align icon and text vertically
    width: 'auto',
    backgroundColor: Colors.semitTransparentWhite, // You can change this to the desired background color
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    height: 25,                    // Icon size
    width: 25,
    tintColor: Colors.white,       // Icon color
  },
  text1: {
    fontSize: 14,                  // Font size for text
    color: 'black',                // Text color (can be adjusted)
    fontWeight: 500, 
    textAlign: 'right',            // Text alignment
    color: Colors.elemDisp,        // Text color from Colors
  },
});

export default WeatherElements;
