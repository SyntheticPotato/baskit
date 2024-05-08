import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { ImageContext } from './image_provider';
import { CommonActions } from '@react-navigation/native';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const { set_taken_image } = useContext(ImageContext)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera
                style={{ flex: 1 }}
                type={Camera.Constants.Type.back}
                ref={ref => {
                    setCameraRef(ref);
                }}
            />
            <Button
                title="Take Picture"
                onPress={async () => {
                    if (cameraRef) {
                        let photo = await cameraRef.takePictureAsync();
                        // console.log(photo.uri);
                        // You can handle the taken photo here (e.g., save it, display it, etc.)
                        set_taken_image(photo.uri)
                    }
                    navigation.dispatch(CommonActions.goBack())
                }}
            />
        </View >
    );
}

export default CameraScreen
