import { View, Text, Button } from "react-native";
import styles from "../styling";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Baskit</Text>
            <Button
                title="suggested"
                onPress={() => navigation.navigate("suggested")}
            />
            <Button
                title="scan"
                onPress={() => navigation.navigate("scan")}
            />
            <Button
                title="logs"
                onPress={() => navigation.navigate("logs")}
            />
        </View>
    )
}

export default HomeScreen;