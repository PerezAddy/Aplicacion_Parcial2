import React from "react";  
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

export default function ExampleEvent({navigation, route}) {   
    const handlePress = () => {
        Alert.alert("¡Botón presionado!", "Has interactuado con el botón.");
    }
    
    const handleShowData = () => {
        Alert.alert("Datos recibidos", `Total: ${total}`);
    }

    const {nombre} = route.params;
    const total = route.params?.total;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.TextTitle}>Ejemplo Eventos</Text>
                <Text style={styles.TextSub}>Hola, {nombre}</Text>
                
                {total !== undefined && (
                    <Text style={styles.TextCounter}>Contador recibido: {total}</Text>
                )}
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Presióname</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={handleShowData}>
                <Text style={styles.buttonText}>Mostrar datos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.backButton]} // Estilo diferente para volver
                onPress={() => navigation.navigate("HomeScreen")}
            >
                <Text style={styles.buttonText}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}       

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30, 
    },
    TextTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0fc1ee', 
        marginBottom: 5,
    },
    TextSub: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
    TextCounter: {
        fontSize: 18,
        color: '#f1c40f', 
        marginTop: 10,
    },
    button: { 
        backgroundColor: '#007AFF', 
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8, 
        marginTop: 12,
        width: '80%', 
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#95a5a6', 
        marginTop: 25,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});