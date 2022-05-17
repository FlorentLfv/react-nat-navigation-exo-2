import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomStack from './nav/CustomStack';
import PhotoScreen from './screens/PhotoScreen';
import CharacterScreen from './screens/CharacterScreen';
import BiographyScreen from './screens/BiographyScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Accueil" component={CustomStack} />
        <Drawer.Screen name="Photo" component={PhotoScreen} />
        <Drawer.Screen name="Personnage" component={CharacterScreen} />
        <Drawer.Screen name="Biographie" component={BiographyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}