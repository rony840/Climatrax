import { ImageBackground, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { TextDisplay, Header, TempDisplay, WeatherStatus, WeatherElements } from "../components/Components";
import Colors from "../assets/colors/Colors";
import { useWeather } from "../context/WeatherContext";
import { useNavigation } from '@react-navigation/native';
import { useCity } from "../context/CityContext";

const WeatherCard = (props) => {
  const { loading, error, temp, windSpeed, highTemp, lowTemp, humidity, weatherStatus,date,time,weatherIcon } = useWeather();
  const { city } = useCity();
  const { text } = props;
  const navigation = useNavigation();
  // Round the temperature values (no decimals)
  const roundedTemp = temp ? Math.round(temp) : null;
  const roundedHighTemp = highTemp ? Math.round(highTemp) : null;
  const roundedLowTemp = lowTemp ? Math.round(lowTemp) : null;
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
   

  const citySelection = () => {
    navigation.replace('Search');
  }
  
  return (
    <View style={styles.cardContainer}>
        <ImageBackground
        source={require('../assets/images/bg3.jpg')}
        style={styles.backgroundImg}
        resizeMode="cover">
        <Header
        iconType="location"
        screenType="weather"
        cityName={city}
        onPressSearchBar={citySelection}
        onPress1={citySelection}
      />
      <View style={styles.detailsContainer1}>
        <TextDisplay text={'Hi, Good Morning...'} />
        <View style={styles.detailsContainer2}>
          <TempDisplay text={roundedTemp+'°C'}/>
          <View style={styles.detailsContainer3}>
            <WeatherStatus iconURL={weatherIcon} text={`${weatherStatus}`} />
            <TextDisplay text={`${time} | ${date}`} />
          </View>
        </View>
        <View style={styles.elementContainer}>
            <WeatherElements text={windSpeed+'m/s'} showIcon={true} type={'wind'}/>
            <WeatherElements text={humidity} showIcon={true} type={'humidity'}/>
            <WeatherElements text={'H: '+roundedHighTemp+'°'}/>
            <WeatherElements text={'L: '+roundedLowTemp+'°'}/>
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
