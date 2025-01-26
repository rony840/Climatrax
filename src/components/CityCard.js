import { ImageBackground, StyleSheet, View } from "react-native";
import { TextDisplay, TempDisplay, WeatherStatus, CityNameDisplay } from "../components/Components";
import Colors from "../assets/colors/Colors";

const CityCard = (props) => {
  const { cityName, time, weatherStatus, temp, tempHighLow, backgroundImage } = props;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={backgroundImage || require('../assets/images/bg3.jpg')}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <View style={styles.detailsContainer1}>
          {/* Left Side Content */}
          <View style={styles.leftContainer}>
            <CityNameDisplay text={cityName || 'City Name'} />
            <TextDisplay text={time || '9:30 AM'} />
            <WeatherStatus text={weatherStatus || 'Partly Cloudy'} />
          </View>

          {/* Right Side Content */}
          <View style={styles.rightContainer}>
            <TempDisplay text={temp || '16'} />
            <TextDisplay text={tempHighLow || 'H:36 L:20'} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,  // Adjust height for better fit
    width: "100%",
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,  // Add margin for spacing between cards
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  detailsContainer1: {
    flexDirection: 'row',  // Place the left and right content side by side
    position: 'absolute',
    bottom: 10,
    padding: 15,
    width: "100%",
    backgroundColor: Colors.transparent,
  },
  leftContainer: {
    flex: 1,  // Take up the left half of the container
    justifyContent: 'space-evenly',  // Space out items evenly
    alignItems: 'flex-start',  // Align items to the left
  },
  rightContainer: {
    flex: 1,  // Take up the right half of the container
    justifyContent: 'center',  // Center content vertically
    alignItems: 'flex-end',  // Align items to the right
    paddingRight: 15,  // Ensure there's some padding on the right side
  },
});

export default CityCard;
