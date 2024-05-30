import React, { useState, useEffect } from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { DefaultTheme } from "@react-navigation/native";
import { setApiBaseUrl } from "@utils/constants";
import { RefreshProvider } from '@utils/refresh';
import HackerLoginForm from '@screens/hackerloginform';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "rgb(0, 0, 0)",
    card: "rgb(16, 16, 16)",
    text: "crimson",
    border: "green",
  },
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [modalClosed, setModalClosed] = useState(false); // Track whether the modal is closed

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalClosed(true); // Set modalClosed to true when modal is closed
  };

  const handleSetBaseUrl = () => {
    const apiUrl = `${websiteUrl}/wp-json/wp/v2/`;
    setApiBaseUrl(apiUrl);
    handleCloseModal();
  };

  useEffect(() => {
    if (modalClosed) {
      setModalClosed(false); // Reset modalClosed state
    }
  }, [modalClosed]);

  return (
    <RefreshProvider>
      <NavigationContainer theme={MyTheme}>
        {/* <Text>{!modalVisible && <HackerLoginForm />}</Text> */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
              <Text style={{ color: "magenta", fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>About the App</Text>
              <Text style={{ color: "blue", fontSize: 16, marginBottom: 20 }}>
                This app allows you to enter a WordPress site URL and fetches all of its posts to display them.
                Additionally, the app displays the original site as well. 📝🔍
              </Text>
              <Text style={{ color: "green", fontSize: 16 }}>
                Developed with ❤️ by M Zeeshan Zafar. 🚀
              </Text>
              <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
                placeholder="Enter website URL"
                onChangeText={text => setWebsiteUrl(text)}
                value={websiteUrl}
              />
              <TouchableOpacity onPress={handleSetBaseUrl} style={{ marginTop: 10, backgroundColor: "blue", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                <Text style={{ color: "white", fontSize: 18 }}>Set URL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCloseModal} style={{ marginTop: 20 }}>
                <Text style={{ color: "blue", fontSize: 18 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <AppNavigator />
      </NavigationContainer>
    </RefreshProvider>
  );
}
