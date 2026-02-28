import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function FoodFavScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.Text1}>COMIDA FAVORITA:</Text>
            
            <Text style={styles.Text}>
                Mi comida favorita es el pollito, el espagueti verde cremoso y los mariscos, especialmente unos buenos aguachiles.
            </Text>

            <View style={styles.foodRow}>
                <Image source={require('../assets/pollo.png')} style={styles.image} /> 
                <Text style={styles.imageText}>Pollo</Text>
            </View>

            <View style={styles.foodRow}>
                <Image source={require('../assets/espa.jpg')} style={styles.image} /> 
                <Text style={styles.imageText}>Espagueti verde</Text>
            </View>

            <View style={styles.foodRow}>
                <Image source={require('../assets/agua.jpg')} style={styles.image} /> 
                <Text style={styles.imageText}>Aguachiles</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AboutMeScreen")}
            >
                <Text style={styles.buttonText}>VOLVER A ABOUT ME</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        paddingVertical: 100,
        paddingHorizontal: 20,
    },
    Text1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0fc1ee',
        marginBottom: 10,
    },
    Text: {
        fontSize: 16,
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: '600',
    },
    foodRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        paddingRight: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageText: {
        color: '#ecf0f1',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    button: { 
        backgroundColor: '#007AFF', 
        paddingVertical: 12, 
        paddingHorizontal: 30,
        borderRadius: 8, 
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});