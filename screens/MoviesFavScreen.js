import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function MoviesFavScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.Text1}>PELÍCULAS FAVORITAS:</Text>
            
            <Text style={styles.Text}>
                Mis películas favoritas son las de rápido y furioso, la que más me gusta es la 5. 
                Otras que me gustan son Interestelar y las de Adam Sandler.
            </Text>

            <View style={styles.fila}>
                <Image source={require('../assets/ryf.jpg')} style={styles.image} /> 
                <Text style={styles.imageText}>Rápido y Furioso 5</Text>
            </View>

            <View style={styles.fila}>
                <Image source={require('../assets/interestelar.jpg')} style={styles.image} /> 
                <Text style={styles.imageText}>Interestelar</Text>
            </View>

            <View style={styles.fila}>
                <Image source={require('../assets/adam.jpg')} style={styles.image} /> 
                <Text style={styles.imageText}>Son como niños</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AboutMeScreen")}
            >
                <Text style={{color: 'white', fontWeight: 'bold'}}>VOLVER A ABOUT ME</Text>
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
    },
    fila: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        marginRight: 20,
    },
    imageText: {
        color: '#ecf0f1',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: { 
        backgroundColor: '#007AFF', 
        padding: 15, 
        borderRadius: 8, 
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
});