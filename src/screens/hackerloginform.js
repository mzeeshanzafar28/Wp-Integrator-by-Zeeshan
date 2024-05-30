import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection } from 'firebase/firestore';
import { auth } from '../firebase.js';
import { DB } from '../config.js';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, ImageBackground, Alert } from 'react-native';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';



export default function HackerLoginForm() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const fadeInAnimation = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeInAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleLogin = () => {
        console.log('Logging in with email:', email, 'and password:', password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in:', user);
                navigation.navigate('Main');
            })
            .catch((error) => {
                // Handle sign-in errors
                console.error('Error signing in:', error.message);
                msg = error.message == "Firebase: Error (auth/invalid-email)." ? "Invalid Email." : error.message;
                msg = error.message == "Firebase: Error (auth/invalid-credential)." ? "Invalid Password." : error.message;
                Alert.alert(msg);
            });
    };
    const handleSignup = () => {
        console.log('Signing up with username:', username, 'email:', email, 'and phone number:', phoneNumber);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const userRef = doc(DB, 'user', username);
                setDoc(userRef, {
                    username: username,
                    email: email,
                    phoneNumber: phoneNumber

                })
                    .then(() => {
                        Alert.alert("Message", "Successfully Registered, continue setup.");
                        navigation.navigate('RegistrationComponent');

                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                msg = error.message == "Firebase: Error (auth/email-already-in-use)." ? "Email Already Registered." : error.message;
                Alert.alert(msg);
            });
    };

    const logoUrl = Image.resolveAssetSource(logo).uri
    return (
        <ImageBackground
            source={{ uri: logoUrl }}
            style={styles.container}
        >
            <Animated.Text style={[styles.heading, { opacity: fadeInAnimation }]}>ZeeTech</Animated.Text>
            <View style={styles.lines}>
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
            </View>
            {isLogin ? (
                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <Text style={styles.subheading}>Login</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLogin(false)}>
                            <Text style={styles.switchText}>Don't have an account? Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <Text style={styles.subheading2}>Signup</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#aaa"
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                placeholderTextColor="#aaa"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
                            <Text style={styles.buttonText}>Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLogin(true)}>
                            <Text style={styles.switchText}>Already have an account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        color: '#0f0',
        marginBottom: 20,
    },
    lines: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: -1,
    },
    line: {
        width: '50%',
        height: 1,
        backgroundColor: '#0f0',
    },
    formContainer: {
        width: '80%',
    },
    form: {
        backgroundColor: '#222',
        borderRadius: 10,
        padding: 20,
    },
    subheading: {
        fontSize: 24,
        color: '#0f0',
        marginBottom: 20,
    },
    subheading2: {
        fontSize: 24,
        color: '#50C878',
        marginBottom: 20,
    },
    inputBox: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#333',
        borderRadius: 5,
        padding: 15,
        color: '#fff',
    },
    loginButton: {
        backgroundColor: '#0f0',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    signupButton: {
        backgroundColor: '#50C878',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    switchText: {
        color: '#0f0',
        textAlign: 'center',
        marginTop: 10,
    },
});
