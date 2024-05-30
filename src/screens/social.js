import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



const MyScrollViewIcon = () => {

    const handleItemClick = (url) => {
        Linking.openURL(url);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.item}>
                <FontAwesomeIcon name="github" size={30} color="black" onPress={() => handleItemClick('https://github.com/mzeeshanzafar28')} />
                <Text style={styles.text}>Github</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="linkedin" size={30} color="black" onPress={() => handleItemClick('https://www.linkedin.com/in/m-zeeshan-zafar-9205a1248/')} />
                <Text style={styles.text}>Linkedin</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="facebook" size={30} color="black" onPress={() => handleItemClick('https://www.facebook.com/people/General-ZodX/61554107524214/')} />
                <Text style={styles.text}>Facebook</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="instagram" size={30} color="black" onPress={() => handleItemClick('https://www.instagram.com/mzeeshanzafar28/')} />
                <Text style={styles.text}>Instagram</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="youtube" size={30} color="black" />
                <Text style={styles.text}>YouTube</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon type="FontAwesome5" icon="fa-brands fa-hackerrank" size={30} color="black" onPress={() => handleItemClick('https://www.hackerrank.com/profile/mzeeshanzafar28')} />
                <Text style={styles.text}>HackerRank</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="stack-overflow" size={30} color="black" onPress={() => handleItemClick('https://stackoverflow.com/users/19621123/muhammad-zeeshan-zafar')} />
                <Text style={styles.text}>Stack Overflow</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="google" size={30} color="black" />
                <Text style={styles.text}>Google</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="apple" size={30} color="black" />
                <Text style={styles.text}>Apple</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="amazon" size={30} color="black" />
                <Text style={styles.text}>Amazon</Text>
            </View>
            <View style={styles.item}>
                <FontAwesomeIcon name="skype" size={30} color="black" />
                <Text style={styles.text}>Skype</Text>
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
