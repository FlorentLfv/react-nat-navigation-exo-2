import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textCentered}>Bienvenue dans mon application</Text>
            <Button title="Ada LOVELACE" onPress={() =>
                navigation.navigate('Contenu')
            }
            />
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
    textCentered: {
        fontSize: 20,
        margin: 50,
        textAlign: 'center',
    },

});