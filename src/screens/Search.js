import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import {Header, CityList} from "../components/Components";

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
  ];

const Search = props =>{
    const {text} = props;

    return(
    <SafeAreaView style={styles.container}>
        <Header iconType="location"
        screenType="search"/>
        
        <CityList citiesData={citiesData} />
   
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default Search;