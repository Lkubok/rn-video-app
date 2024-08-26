import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "react-native-video";

import { ThemedLayout } from "@/components/ThemedLayout";

import { responseMovie } from "./videoResponse";

const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

const VideoDetailsScreen = ({ route }) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id } = params;

  const [videoDetails, setVideoDetails] = useState({
    videoUrl: "",
    title: "",
    description: "",
    views: "",
    likes: "",
  });

  useEffect(() => {
    if (id) {
      fetchVideoDetails(id);
    }
  }, [id]);

  const fetchVideoDetails = async (videoId: string) => {
    try {
      // const response = await axios.get(
      // `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics`
      // );
      const response = responseMovie;
      // console.log(response);
      const videoData = response.data.items[0];
      setVideoDetails({
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        title: videoData.snippet.title,
        description: videoData.snippet.description,
        views: videoData.statistics.viewCount,
        likes: videoData.statistics.likeCount,
      });
    } catch (error) {
      console.error("Error fetching video details: ", error);
    }
  };

  console.log("videoDetails.videoUrl", videoDetails.videoUrl);

  return (
    <ThemedLayout style={{ flex: 1 }}>
      <SafeAreaView style={[{ flex: 1 }]}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Video
            source={{ uri: videoDetails.videoUrl }}
            style={styles.video}
            controls
            resizeMode="contain"
          />
          <Text style={styles.title}>{videoDetails.title}</Text>
          <Text style={styles.description}>{videoDetails.description}</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.stats}>Views: {videoDetails.views}</Text>
            <Text style={styles.stats}>Likes: {videoDetails.likes}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ThemedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "blue",
  },
  video: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stats: {
    fontSize: 16,
    color: "gray",
  },
});

export default VideoDetailsScreen;
