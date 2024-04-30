import { View, Text } from "react-native";
import styles from "../styling";
import { Button } from "react-native";

const ScanScreen = (navigation) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Scan your receipts</Text>
            {/* <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            /> */}
        </View>
    )
}
export default ScanScreen;
