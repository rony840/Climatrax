import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CityCard from './CityCard'; // Import the CityCard component

const CityList = ({ citiesData }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={citiesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CityCard
            cityName={item.cityName}
            time={item.time}
            weatherStatus={item.weatherStatus}
            temp={item.temp}
            tempHighLow={item.tempHighLow}
            backgroundImage={item.backgroundImage}  // Optionally set different images per city
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding:10,
    paddingTop: 10,
  },
});

export default CityList;
