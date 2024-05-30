import { Animated, StyleSheet } from "react-native";
import {
  MixedStyleDeclaration,
  MixedStyleRecord,
} from "react-native-render-html";

type WebViewStyle = {
  tagStyles: MixedStyleRecord;
  baseFontStyle: MixedStyleDeclaration;
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D0D0D0",
  },
  scrollViewContainer: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const postStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#750E21",
    // backgroundColor: "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
    borderRadius: 18,
    padding: 10,
  },
  subContainer: {
    width: "70%",
    paddingHorizontal: 10,
  },
  image: {
    width: "30%",
    height: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  excerpt: {
    fontSize: 16,
  },
});

export const imageCarouselStyle = StyleSheet.create({
  wrapper: {
    height: 200,
    backgroundColor: "#D0D0D0"
  },
  imageBackground: {
    flex: 1,
    height: 200,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "#D0D0D0",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  title: {
    color: "red",
    textShadowColor: "magenta",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "serif",
    textAlign: "center",
    margin: 20,
  },

});

export const htmlTagStyles = {
  tagStyles: {
    p: {},
  },
  baseFontStyle: {},
} satisfies WebViewStyle;
