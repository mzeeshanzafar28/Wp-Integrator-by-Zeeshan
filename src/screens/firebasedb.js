// app.js to Add the record to firebase
import React, { useState } from 'react';
import { Alert, Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { getFirestore, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { DB } from '../config';


const FirebaseDB = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    //add data
    const handleButtonPress = () => {
        setDoc(doc(DB, "user", name), {
            name: name,
            type: type,
        }).then(() => {
            Alert.alert("User Data Added.");
        }).catch((error) => {
            console.log(error);
        });
    };

    //update data
    // const handleButtonPress = () => {
    //     setDoc(doc(DB, "user", name), {
    //         name: name,
    //         type: type,
    //     }).then(() => {
    //         Alert.alert("User Data Updated.");
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    //delete data
    // const handleButtonPress = () => {
    //     deleteDoc(doc(DB, "user", name)).then(() => {
    //         Alert.alert("User Data Deleted.");
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Record</Text>
            <TextInput
                style={styles.input}
                placeholder="User Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="User Type"
                value={type}
                onChangeText={setType}
            />

            <Button
                title="Submit"
                onPress={handleButtonPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "lightyellow",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default FirebaseDB;
