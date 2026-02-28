import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.Text}>Bienvenido a la pantalla de inicio</Text>
            
            <Image source={require('../assets/img.png')} style={styles.image} />
            
            <Text style={styles.Text1}>ADDY MAAX PEREZ OROZCO</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ExampleEvent", {nombre: "Addy"} )}
            >
                <Text style={styles.buttonText}>Ir a Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Counter")}
            >
                <Text style={styles.buttonText}>Ir a Contador</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AboutMeScreen")}
            >
                <Text style={styles.buttonText}>Ir a Sobre Mi</Text>
            </TouchableOpacity>

            <Text style={styles.TextInfo}>Carrera: TI  •  Cuatrimestre: 5A Class</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    Text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginTop: 30,
        marginBottom: 20,
    },
    Text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    button: { 
        backgroundColor: '#007AFF', 
        padding: 15, 
        borderRadius: 8, 
        marginTop: 15,
        width: '70%', 
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    TextInfo: {
        fontSize: 14,
        color: '#0fc1ee',
        marginTop: 30,
        fontWeight: 'bold',
    },
});