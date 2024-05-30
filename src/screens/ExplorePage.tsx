import React, { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@navigation/navigationTypes";
import { decodeText } from "@utils/helper";
import { globalStyles, imageCarouselStyle } from "@utils/styles";
import ImageCarousel from "@components/ImageCarousel";
import WordPressPost from "@components/WordPressPost";
import { usePosts } from "@storage/hooks/usePosts";
import { APP_NAME } from "@utils/constants";
// import { API_BASE_URL } from "@utils/constants";

type ExplorePageNavigationProp = StackNavigationProp<RootStackParamList, 'Explore'>;

const ExplorePage: React.FC = () => {

  // if (!API_BASE_URL) {
  //   return null;
  // }

  const { posts, loading, error, refetchPosts } = usePosts();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<ExplorePageNavigationProp>();
  const images = [
    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1476370648495-3533f64427a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://cdn.pixabay.com/photo/2023/01/22/16/31/matrix-7736853_1280.png',
    'https://cdn.pixabay.com/photo/2015/06/18/01/46/hack-813290_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690_960_720.png',

  ];

  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffle(images);
    setShuffledImages(shuffled);

  }, []);

  const handlePostPress = (postId: number) => {
    navigation.navigate('PostDetails', { postId });
  };

  const randomPosts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: {
      rendered: APP_NAME,
    },
    excerpt: {
      rendered: `This is the excerpt of post ${index + 1}`,
    },
    jetpack_featured_media_url: images[Math.floor(Math.random() * images.length)]
  }));

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={imageCarouselStyle.wrapper}>
        <ImageCarousel featuredPosts={randomPosts} />
      </View>
      <ScrollView
        style={globalStyles.scrollViewContainer}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refetchPosts} />}
      >
        {posts.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handlePostPress(item.id)}>
            {/* Assign a random image URL from the shuffledImages array */}
            <WordPressPost
              imageUrl={shuffledImages[index % shuffledImages.length]}
              title={decodeText(item.title.rendered)}
              excerpt={decodeText(item.excerpt.rendered)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const shuffle = (array: any[]) => {

  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

export default ExplorePage;