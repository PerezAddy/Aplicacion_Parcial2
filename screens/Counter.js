import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Counter({navigation}) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleRestar = () => setCount(count - 1);
    const handleReiniciar = () => setCount(0);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Contador</Text>
            
            {/* El número ahora resalta más */}
            <View style={styles.countContainer}>
                <Text style={styles.value}>{count}</Text>
            </View>

            {/* Controles principales */}
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, {flex: 1}]} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>Sumar +</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.button, styles.redButton, {flex: 1}]} onPress={handleRestar}>
                    <Text style={styles.buttonText}>Restar -</Text>
                </TouchableOpacity>
            </View>

            {/* Acciones de navegación y reset */}
            <TouchableOpacity style={styles.buttonAction} onPress={() => navigation.navigate("ExampleEvent", {total: count} )}>
                <Text style={styles.buttonText}>Enviar a Eventos ➡️</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAction} onPress={handleReiniciar}>
                <Text style={styles.buttonText}>Reiniciar a 0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("HomeScreen")}>
                <Text style={styles.buttonText}>Volver a Home</Text>
            </TouchableOpacity>
            
            <Text style={styles.hint}>Aquí usamos el hook useState</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24 
    },
    title: {
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#0fc1ee',
        marginBottom: 20 
    },
    countContainer: {
        backgroundColor: '#34495e',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 30,
    },
    value: { 
        fontSize: 60, 
        fontWeight: 'bold', 
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    button: { 
        backgroundColor: '#27ae60', // Verde para sumar
        padding: 15, 
        borderRadius: 10,
    },
    redButton: {
        backgroundColor: '#e74c3c', // Rojo para restar
    },
    buttonAction: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#95a5a6',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: { 
        color: '#ffffff', // Texto blanco para que se lea bien
        fontSize: 16, 
        fontWeight: 'bold', 
    },
    hint: {
        fontSize: 14, 
        color: '#ecf0f1',
        opacity: 0.5, 
        marginTop: 20 
    },
});