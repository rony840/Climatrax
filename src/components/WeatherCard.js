import { ImageBackground, StyleSheet, View } from "react-native";
import { TextDisplay, IconButton, Header, TempDisplay, WeatherStatus, WeatherElements } from "../components/Components";
import Colors from "../assets/colors/Colors";

const WeatherCard = (props) => {
  const { text } = props;

  return (
    <View style={styles.cardContainer}>
        <ImageBackground
        source={require('../assets/images/bg3.jpg')}
        style={styles.backgroundImg}
        resizeMode="cover">
        <Header
        iconType="location"
        screenType="weather"
        cityName={'Marietta, Atlanta, GA'}
      />
      <View style={styles.detailsContainer1}>
        <TextDisplay text={'Hi, Good Morning...'} />
        <View style={styles.detailsContainer2}>
          <TempDisplay />
          <View style={styles.detailsContainer3}>
            <WeatherStatus text={'Partly Cloudy'} />
            <TextDisplay text={'7:30 AM | Jan 27'} />
          </View>
        </View>
        <View style={styles.elementContainer}>
            <WeatherElements showIcon={true}/>
            <WeatherElements showIcon={true}/>
            <WeatherElements text={'H: 48'}/>
            <WeatherElements text={'L: 28'}/>
        </View>
      </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: "45%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow:'hidden',
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  detailsContainer1: {
    position: 'absolute',
    bottom: 10,
    height: 180,
    padding: 10,
    width: "100%",
    backgroundColor: Colors.transparent,
  },
  detailsContainer2: {
    flexDirection: 'row',  // Keep TempDisplay and WeatherStatus in a row
    width: "100%",
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',  // Spread out the items
  },
  detailsContainer3: {
    flexDirection: 'column',  // Stack items vertically inside detailsContainer3
    justifyContent: 'center',  // Align vertically from top to bottom
    alignItems: 'flex-end',  // Align items to the right
    position: 'relative',
    width: "50%",  // You can adjust the width to fit your needs
    backgroundColor: Colors.transparent, // For visual clarity (you can remove this or change the color)
  },
  elementContainer: {
    marginTop:10,
    flexDirection: 'row',  // Keep TempDisplay and WeatherStatus in a row
    width: "100%",
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',  // Spread out the items
    padding: 5,
  },
});

export default WeatherCard;
