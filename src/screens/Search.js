import { SafeAreaView, StyleSheet } from "react-native";
import { Header, CityList } from "../components/Components";
import { useState } from "react";
import { useCity } from "../context/CityContext";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const [city, setCityState] = useState("");  // Corrected: use "city" to match with the state name
  const { setCity } = useCity();
  
  // Submit the search query
  const SubmitSearchQuery = () => {
    if (city) {
      setCity(city);  // Corrected: use "city" instead of "cityName"
      navigation.navigate('Weather');  // Navigate to Weather screen
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        iconType="search"
        screenType="search"
        setCityName={setCityState}
        onSubmit={SubmitSearchQuery}  // Pass onSubmit prop to handle search submission
      />
      
      <CityList citiesData={citiesData} />
    </SafeAreaView>
  );
};

const citiesData = [
  {
    cityName: 'Marietta',
    time: '9:30 AM',
    weatherStatus: 'Partly Cloudy',
    temp: '16°',
    tempHighLow: 'H:36 L:20',
    backgroundImage: require('../assets/images/bg3.jpg'),
  },
  {
    cityName: 'New York',
    time: '10:30 AM',
    weatherStatus: 'Sunny',
    temp: '22°',
    tempHighLow: 'H:25 L:15',
    backgroundImage: require('../assets/images/bg1.jpg'),
  },
  {
    cityName: 'Los Angeles',
    time: '11:30 AM',
    weatherStatus: 'Clear',
    temp: '28°',
    tempHighLow: 'H:30 L:18',
    backgroundImage: require('../assets/images/bg2.jpg'),
  },
  {
    cityName: 'Marietta',
    time: '9:30 AM',
    weatherStatus: 'Partly Cloudy',
    temp: '16°',
    tempHighLow: 'H:36 L:20',
    backgroundImage: require('../assets/images/bg3.jpg'),
  },
  {
    cityName: 'New York',
    time: '10:30 AM',
    weatherStatus: 'Sunny',
    temp: '22°',
    tempHighLow: 'H:25 L:15',
    backgroundImage: require('../assets/images/bg1.jpg'),
  },
  {
    cityName: 'Los Angeles',
    time: '11:30 AM',
    weatherStatus: 'Clear',
    temp: '28°',
    tempHighLow: 'H:30 L:18',
    backgroundImage: require('../assets/images/bg2.jpg'),
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default Search;
