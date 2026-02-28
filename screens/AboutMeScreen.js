import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function AboutMeScreen({navigation}) {   

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.Text1}>DESCRIPCIÓN DE MÍ:</Text>
            
            <View style={styles.descriptionBox}>
                <Text style={styles.Text}>
                    Hola, Me llamo Addy Maax y tengo 20 años. Soy estudiante todavía y soy una persona de estatura alta y calmado. 
                    Me gusta jugar futbol, es mi deporte favorito tanto jugarlo como verlo.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("FoodFavScreen")}
                >
                    <Text style={styles.buttonText}>Comida Favorita 🍕</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("MoviesFavScreen")}
                >
                    <Text style={styles.buttonText}>Película Favorita 🎬</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button, styles.backButton]} // Estilo extra para diferenciarlo
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    <Text style={styles.buttonText}>Volver a Home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}       

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    Text1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0fc1ee',
        marginBottom: 20,
    },
    descriptionBox: {
        padding: 20,
        borderRadius: 15,
        width: '100%',
        marginBottom: 30,
    },
    Text: {
        fontSize: 18,
        color: '#ecf0f1',
        textAlign: 'center',
        lineHeight: 25, 
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: { 
        backgroundColor: '#007AFF', 
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10, 
        marginTop: 15,
        width: '100%', 
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#95a5a6', 
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});