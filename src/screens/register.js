import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

export default function RegistrationComponent() {
    const [stage, setStage] = useState(1);
    const [isFreelancer, setIsFreelancer] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [showSkillset, setShowSkillset] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userType, setUserType] = useState('');

    const skills = [
        "JavaScript",
        "React Native",
        "Python",
        "Java",
        "Swift",
        "Node.js",
        "Vue.js",
        "Angular",
        "Ruby",
        "C++",
        "C#",
        "PHP",
        "HTML",
        "CSS",
        "Bootstrap",
        "jQuery",
        "SQL",
        "MongoDB",
        "Firebase",
        "Express.js"
    ];

    const handleSkillSelection = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(selected => selected !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleContinue = () => {
        if (isFreelancer) {
            setShowSkillset(true);
            setStage(2);
        } else if (isUser) {
            setStage(2);
        } else {
            // Neither freelancer nor user selected
            alert("Please select at least one option.");
        }
    };

    const handleBack = () => {
        setShowSkillset(false);
        setStage(1);
    };

    const handleStage2Continue = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Proceed to next step
            alert("Please Wait");
        }, 2000);
    };

    const handleUserTypeSelection = (type) => {
        setUserType(type);
    };

    const handleUserSelection = () => {
        // If the user selects to go as a user, ensure only user type is selected
        setIsFreelancer(false);
        setIsUser(true);
    };

    const handleFreelancerSelection = () => {
        // If the user selects to go as a freelancer, ensure only freelancer type is selected
        setIsUser(false);
        setIsFreelancer(true);
    };

    return (
        <View style={styles.container}>
            {stage === 1 && (
                <>
                    <Text style={styles.title}>Register as:</Text>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={handleFreelancerSelection} style={[styles.checkbox, isFreelancer && styles.checked]}>
                            {isFreelancer && <View style={styles.checkboxInner} />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>Freelancer</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={handleUserSelection} style={[styles.checkbox, isUser && styles.checked]}>
                            {isUser && <View style={styles.checkboxInner} />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>User</Text>
                    </View>
                    <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </>
            )}
            {stage === 2 && (
                <>
                    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    {isFreelancer ? (
                        <ScrollView contentContainerStyle={styles.skillsetScrollContainer}>
                            <View style={styles.skillsetContainer}>
                                <Text style={styles.title}>Select your skillset:</Text>
                                {skills.map((skill, index) => (
                                    <View key={index} style={styles.checkboxContainer}>
                                        <TouchableOpacity onPress={() => handleSkillSelection(skill)} style={[styles.checkbox, selectedSkills.includes(skill) && styles.checked]}>
                                            {selectedSkills.includes(skill) && <View style={styles.checkboxInner} />}
                                        </TouchableOpacity>
                                        <Text style={styles.checkboxText}>{skill}</Text>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    ) : (
                        <View style={styles.userTypeContainer}>
                            <Text style={styles.title}>I will:</Text>
                            <TouchableOpacity onPress={() => handleUserTypeSelection("shop")} style={[styles.radioContainer]}>
                                <View style={[styles.radio, userType === "shop" && styles.radioSelected]} />
                                <Text style={styles.radioText}>Shop</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleUserTypeSelection("hire")} style={[styles.radioContainer]}>
                                <View style={[styles.radio, userType === "hire" && styles.radioSelected]} />
                                <Text style={styles.radioText}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity onPress={handleStage2Continue} style={styles.continueButton}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <Text style={styles.buttonText}>Continue</Text>
                        )}
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "lightyellow",
        width: "100%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxInner: {
        width: 10,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 2,
    },
    checkboxText: {
        fontSize: 18,
        marginLeft: 8
    },
    checked: {
        backgroundColor: '#000',
    },
    continueButton: {
        backgroundColor: '#0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20
    },
    backButton: {
        backgroundColor: '#ff0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    skillsetContainer: {
        marginTop: 20
    },
    skillsetScrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userTypeContainer: {
        alignItems: 'center'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    radio: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 10
    },
    radioSelected: {
        backgroundColor: '#000',
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 10

    },
    radioText: {
        fontSize: 18,
        marginLeft: 8,
    }
});
