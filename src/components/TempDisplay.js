import { StyleSheet, Text } from "react-native";
import Colors from "../assets/colors/Colors";

const TempDisplay = props =>{
    const {text} = props;
    return(
    <Text style={styles.text1}>
        {text||"16°C"}
    </Text>
    );
};

const styles = StyleSheet.create({
    text1:{
        fontSize: 76,
        color: Colors.white,
    },
});

export default TempDisplay;