import React from "react";
import { WebView } from "react-native-webview";
import { API_BASE_URL } from '@utils/constants';
const SitePage: React.FC = () => {

  // if (API_BASE_URL.length < 10) {
  //   return null;
  // }

  return (
    <WebView
      source={{ uri: API_BASE_URL.split("/").slice(0, 3).join("/") }}
      style={{ flex: 1 }}
    />
  );
};

export default SitePage;
