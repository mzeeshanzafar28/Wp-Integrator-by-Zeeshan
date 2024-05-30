import React from "react";
import { WebView } from "react-native-webview";

const AboutZeeshan: React.FC = () => {
  return (
    <WebView
      source={{ uri: "https://mzeeshanzafar28.github.io/zeefolio/" }}
      style={{ flex: 1 }}
    />
  );
};

export default AboutZeeshan;
