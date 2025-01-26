import { StyleSheet, Text } from "react-native";
import Colors from "../assets/colors/Colors";

const CityNameDisplay = props =>{
    const {text} = props;
    return(
    <Text style={styles.text1}>
        {text||"Marietta"}
    </Text>
    );
};

const styles = StyleSheet.create({
    text1:{
        fontSize: 26,
        color: Colors.txtDisp,
    },
});

export default CityNameDisplay;