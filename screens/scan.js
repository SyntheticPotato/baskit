import { View, Text, Button, Image } from "react-native";
import styles from "../styling";
import { useEffect, useState } from "react";
import { scan } from "../utils/ocr";
import * as DocumentPicker from 'expo-document-picker';


const ScanScreen = (navigation) => {
    const [selected_img, set_selected_img] = useState("../assets/no_image.png")

    useEffect(() => {
        if (selected_img) {
            scan(selected_img)
        }
    }, [selected_img])

    const pick_image = async () => {
        try {
            const image = await DocumentPicker.getDocumentAsync({
                type: 'image/*', // Specify image/* to pick all image types
            });

            if (!image.canceled) {
                // Handle the selected image
                console.log(image);
                set_selected_img(image.assets[0].uri)
            }
        } catch (error) {
            console.error('Error picking image: ', error);
        }
    }

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Scan your receipts</Text>
            <Button
                title="pick image"
                onPress={() => pick_image()}
            />

            <Image source={{ uri: selected_img }} style={styles.image} />
        </View>
    )


}



export default ScanScreen;
