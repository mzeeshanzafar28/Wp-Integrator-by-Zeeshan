import React, { useState } from 'react';
import { Modal, Button, View, Text } from 'react-native';

const MyModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => {
        setIsModalVisible(true);
    };

    return (
        <View style={{ flex: 1, paddingTop: 200, backgroundColor: 'lightyellow', width: "90%" }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(false);
                }}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 200 }}>
                    <View style={{ backgroundColor: 'white', padding: 20, margin: 50, borderRadius: 10 }}>
                        <Text>This is the modal's content!</Text>
                        <Button title="Close" onPress={() => setIsModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            <Button title="Open Modal" onPress={handleModal} />
        </View>
    );
};

export default MyModal;