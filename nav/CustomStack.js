import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CharacterScreen from '../screens/CharacterScreen';
import BiographyScreen from '../screens/BiographyScreen';
import PhotoScreen from '../screens/PhotoScreen';

const Drawer = createDrawerNavigator();

export default function CustomStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Photo" component={PhotoScreen} />
            <Drawer.Screen name="Ada LOVELACE" component={CharacterScreen} />
            <Drawer.Screen name="Biographie" component={BiographyScreen} />
        </Drawer.Navigator>
    )
}