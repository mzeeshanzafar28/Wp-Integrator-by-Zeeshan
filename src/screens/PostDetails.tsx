import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import axios from "axios";
import { API_BASE_URL } from "@utils/constants"; // Adjust the import path based on your project structure
import { decodeText } from "@utils/helper";
import { RootStackParamList } from "@navigation/navigationTypes"; // Adjust the import path based on your project structure
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;


const PostDetails: React.FC = () => {

    const route = useRoute<PostDetailsRouteProp>();
    const { postId } = route.params;
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (!postId) console.log("NO POST ID");  // Check if postId is available
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}posts/${postId}`);
                setPost(response.data);
            } catch (err) {
                console.log(err)
                setError("Failed to load post.");
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [postId]);

    if (!postId || loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.error}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Image source={{ uri: post.jetpack_featured_media_url }} style={styles.image} /> */}
            <Text style={styles.title}>{decodeText(post.title.rendered)}</Text>
            <RenderHtml
                contentWidth={width}
                source={{ html: post.content.rendered }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    error: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: 16,
        backgroundColor: "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)"
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default PostDetails;
