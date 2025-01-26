import { StyleSheet, Text } from "react-native";
import Colors from "../assets/colors/Colors";

const TextDisplay = props =>{
    const {text} = props;
    return(
    <Text style={styles.text1}>
        {text||"This is TextDisplay"}
    </Text>
    );
};

const styles = StyleSheet.create({
    text1:{
        fontSize: 16,
        color: Colors.txtDisp,
    },
});

export default TextDisplay;