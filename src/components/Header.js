import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { IconButton } from "./Components";  // Ensure the import path is correct
import Colors from "../assets/colors/Colors";

const Header = (props) => {
  const { iconType, screenType, cityName, placeholder, setCityName, onPressSearchBar } = props;

  // Determine if the header should be editable or not
  const isEditable = screenType === "search"; // Only editable in search screen
  const isWeatherScreen = screenType === "weather"; // Check if the screen is Weather screen

  // Search bar container takes full width in weather screen if no other icons
  const searchBarContainerStyle = isWeatherScreen ? { ...styles.searchBarContainer, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' } : styles.searchBarContainer;
  const searchBarStyle = isWeatherScreen ? { ...styles.searchBar, width: 315 } : styles.searchBar;
  const headerBarStyle = isWeatherScreen ? { ...styles.headerBar, backgroundColor: Colors.transparent} : styles.headerBar;
  return (
    <View style={headerBarStyle}>
        
      <View style={searchBarContainerStyle}>
        {/* Location Icon or Search Icon */}
        <IconButton
          type={isWeatherScreen ? "location" : iconType}
          opacity={false}
          onPress={() => console.log(isWeatherScreen ? "Location pressed" : "Search pressed")}
        />

        {/* Search Bar or City Name */}
        <TouchableOpacity onPress={onPressSearchBar}>
          <TextInput
            style={searchBarStyle}
            placeholder={placeholder || "Search your city name here..."}
            value={cityName}  // The city name, or search text
            onChangeText={setCityName}  // Function to update city name (for search)
            editable={isEditable}  // Disable editing if not on the search screen
          />
        </TouchableOpacity>
      </View>

      {/* Show buttons only for search screen */}
      {screenType === "search" && (
        <View style={styles.buttonContainer}>
          {/* Edit Icon */}
          <IconButton type="edit" opacity={false} onPress={() => console.log("Edit pressed")} />
          {/* Settings Icon */}
          <IconButton type="setting" opacity={false} onPress={() => console.log("Settings pressed")} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    width: "100%",
    height: 60, // Adjusted height to 50 for a better fit
    backgroundColor: 'grey',
    borderColor: 'black',
    flexDirection: 'row',  // Arrange icons and search bar horizontally
    alignItems: 'center',  // Vertically align items in the center
    justifyContent: 'space-between',  // Distribute space evenly
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBarContainer: {
    flex: 2,  // Take up all the available space for the search bar
    width: "70%",
    backgroundColor: '#d3d3d3',  // White background for the search bar
    position: 'absolute',
    borderRadius: 30,
    left: 20,
    flexDirection: 'row',
    zIndex:0,
  },
  searchBar: {
    flex:1,
    width: 210,
    left:0,
    borderRadius:30,
    paddingLeft:15,
    paddingRight:15,
    fontSize:18,
    color:Colors.white,
    height: 50,
    backgroundColor: Colors.transparent,  // White background for the search bar

  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,  // Take up all the available space for the search bar
    position: 'absolute',
    right: 10,  // Some space after the search icon
    marginRight: 0,
    width: 100,
    backgroundColor: Colors.transparent,  // Transparent background
    justifyContent: 'space-between',  // Distribute space evenly
    zIndex:1,
  },
});

export default Header;
