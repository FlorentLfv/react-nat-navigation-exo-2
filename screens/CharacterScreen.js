import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

export default function CharacterScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textCentered}>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de
                Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte
                le 27 novembre 1852 à Marylebone dans la même ville, est une
                pionnière de la science informatique.
            </Text>
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