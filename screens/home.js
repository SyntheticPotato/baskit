import { View, Text, Button, Image } from "react-native";
import styles from "../styling";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.titleContainer}>
            <Image source={{ uri: '../assets/splash.png', headers: { 'Accept': 'image/*' } }} style={styles.image_title} />


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