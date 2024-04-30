import { View, Text } from "react-native";
import styles from "../styling";
import { Button } from "react-native";

const NotHomeScreen = (navigation) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>not Home</Text>
            {/* <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            /> */}
        </View>
    )
}
export default NotHomeScreen;
