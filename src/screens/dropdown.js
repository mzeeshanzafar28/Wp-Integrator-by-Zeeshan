import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownMenuDemo = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a very simple dropdown.</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
                placeholder="Select an option"
                arrowSize={20}
                arrowColor="#007BFF"
                textStyle={{ color: '#007BFF' }}
                dropDownStyle={{ backgroundColor: '#fff' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightyellow',

    },
    dropdown: {
        borderColor: '#007BFF',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 7
    },
});

export default DropdownMenuDemo;