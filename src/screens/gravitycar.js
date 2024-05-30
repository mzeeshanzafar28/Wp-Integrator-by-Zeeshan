import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GravityCar = () => {
    const [data, setData] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        const subscription = Accelerometer.addListener(setData);

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                X: {data.x.toFixed(2)}, Y: {data.y.toFixed(2)}, Z: {data.z.toFixed(2)}
            </Text>
            <CarIcon data={data} />
        </View>
    );
};

const CarIcon = ({ data }) => {
    return (
        <View style={styles.carContainer}>
            <Icon name="car" size={50} color="blue" style={[styles.carIcon, { transform: [{ translateX: data.x * 100 }, { translateY: -data.y * 100 }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightyellow"
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    carContainer: {
        position: 'relative',
        width: 50,
        height: 50,
    },
    carIcon: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
});

export default GravityCar;