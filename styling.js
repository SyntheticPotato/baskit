import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

    image: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },

    image_title: {
        width: 500,
        height: 500,
        resizeMode: 'center',
    },

});

export default styles;
