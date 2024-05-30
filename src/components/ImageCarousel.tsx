import { decodeText } from "@utils/helper";
import { imageCarouselStyle } from "@utils/styles";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

const ImageCarousel = ({ featuredPosts }) => {
  return (
    <Swiper
      style={imageCarouselStyle.wrapper}
      showsButtons={false}
      autoplay
      autoplayTimeout={4}
      activeDotColor="#fff"
      key={featuredPosts.length}
    >
      {featuredPosts.map((post, index) => (
        <View key={index}>
          <ImageBackground
            source={{ uri: post.jetpack_featured_media_url }}
            imageStyle={imageCarouselStyle.imageBackground}
            style={imageCarouselStyle.overlay}
          >
            <Text style={imageCarouselStyle.title}>
              {decodeText(post.title.rendered)}
            </Text>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
