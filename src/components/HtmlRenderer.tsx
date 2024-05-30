import React from "react";
import { useWindowDimensions } from "react-native";
import HTML, { MixedStyleRecord } from "react-native-render-html";

const HTMLRenderer = ({ htmlContent, tagsStyles = {}, defaultTextProps = {} }) => {
  const { width } = useWindowDimensions();

  return (
    <HTML
      tagsStyles={tagsStyles}
      contentWidth={width}
      source={{ html: htmlContent }}
      defaultTextProps={defaultTextProps}
    />
  );
};

export default HTMLRenderer;
