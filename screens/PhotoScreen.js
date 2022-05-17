import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PhotoScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png/260px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png' }} style={styles.image} />
            <Text style={styles.textCentered}>Ada LOVELACE</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 50,
    },
    textCentered: {
        fontSize: 20,
        margin: 50,
        textAlign: 'center',
    },
});