import { View, Text, Button, Image } from "react-native";
import styles from "../styling";
import { useContext, useEffect, useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import { ImageContext } from "../utils/image_provider";
import { ping_server } from "../utils/server_functions";
import { scan } from "../server/utils/ocr";


const ScanScreen = ({ navigation }) => {
    const { taken_image } = useContext(ImageContext)
    const [selected_img, set_selected_img] = useState("../assets/no_image.png")

    useEffect(() => {
        ping_server()
    }, [])

    // TODO: Ask nathan if theres a better way to transfer the taken image between screens
    // TODO: Ask nathan if theres a better way to transfer the taken image between screens
    // TODO: Ask nathan if theres a better way to transfer the taken image between screens
    useEffect(() => {
        if (taken_image) {
            console.log("updated image to the camera image")
            set_selected_img(taken_image)
        }
    }, [taken_image])

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
            <Button
                title="take a picture"
                onPress={() => navigation.navigate("camera")}
            />

            <Image source={{ uri: selected_img }} style={styles.image} />
        </View>
    )


}



export default ScanScreen;
