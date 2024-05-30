import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyScrollViewIcon = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.item}>
                <Icon name="home" size={30} color="black" />
                <Text style={styles.text}>Home</Text>
            </View>
            <View style={styles.item}>
                <Icon name="settings" size={30} color="black" />
                <Text style={styles.text}>Settings</Text>
            </View>
            <View style={styles.item}>
                <Icon name="insert-chart" size={30} color="black" />
                <Text style={styles.text}>Charts</Text>
            </View>
            <View style={styles.item}>
                <Icon name="phone" size={30} color="black" />
                <Text style={styles.text}>Phone</Text>
            </View>
            <View style={styles.item}>
                <Icon name="photo-camera" size={30} color="black" />
                <Text style={styles.text}>Camera</Text>
            </View>
            <View style={styles.item}>
                <Icon name="restaurant" size={30} color="black" />
                <Text style={styles.text}>Restaurant</Text>
            </View>
            <View style={styles.item}>
                <Icon name="flight" size={30} color="black" />
                <Text style={styles.text}>Flight</Text>
            </View>
            <View style={styles.item}>
                <Icon name="favorite" size={30} color="black" />
                <Text style={styles.text}>Favorites</Text>
            </View>
            <View style={styles.item}>
                <Icon name="event" size={30} color="black" />
                <Text style={styles.text}>Events</Text>
            </View>
            <View style={styles.item}>
                <Icon name="attach-money" size={30} color="black" />
                <Text style={styles.text}>Money</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: "100%",
        backgroundColor: "lightpink"
    },
    item: {
        height: 100,
        backgroundColor: 'lightyellow',
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Arrange icon and text horizontally
    },
    text: {
        marginLeft: 10, // Add some space between icon and text
        fontSize: 20,
    },
});

export default MyScrollViewIcon;