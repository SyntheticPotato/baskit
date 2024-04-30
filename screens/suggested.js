import { View, Text } from "react-native";
import styles from "../styling";
import { Button } from "react-native";

const SuggestedScreen = (navigation) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Suggested Orders</Text>
            {/* <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            /> */}
        </View>
    )
}
export default SuggestedScreen;
