import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../screens/Counter';
import ExampleEvent from '../screens/ExampleEvent';
import HomeScreen from '../screens/HomeScreen';
import AboutMeSreen from '../screens/AboutMeScreen';
import FoodFavScreen from '../screens/FoodFavScreen';
import MoviesFavScreen from '../screens/MoviesFavScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
    <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' 
        component={HomeScreen} 
        options={{ title: 'Inicio'}}
        />

        <Stack.Screen 
        name='Counter'
        component={Counter}
        options={{ title: 'Contador'}}
        />
        
        <Stack.Screen 
        name='ExampleEvent'
        component={ExampleEvent}
        options={{ title: 'Ejemplo de Evento'}}
        />
        
        <Stack.Screen 
        name='AboutMeScreen'
        component={AboutMeSreen}
        options={{ title: 'Sobre mi'}}
        />
        
        <Stack.Screen
        name='FoodFavScreen'
        component={FoodFavScreen}
        options={{ title: 'Comida Favorita'}}
        />
        
        <Stack.Screen
        name='MoviesFavScreen'
        component={MoviesFavScreen}
        options={{ title: 'Pelicula Favorita'}}
        />  
    </Stack.Navigator>
    );
}