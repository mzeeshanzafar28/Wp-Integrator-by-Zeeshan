import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>I am Zeeshan</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>I can Code</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>I can Debug</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'aqua',
        width: '100%'
    },
    card: {
        backgroundColor: '#D8B3C5',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
