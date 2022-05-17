import * as React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PhotoScreen from '../screens/PhotoScreen';

const Stack = createNativeStackNavigator();

export default function CustomStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bienvenue" component={HomeScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
    )
}