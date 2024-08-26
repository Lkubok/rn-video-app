// import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Video, { VideoRef } from "react-native-video";

import { ThemedLayout } from "@/components/ThemedLayout";
import VideoControls from "@/components/VideoControls/VideoControls";

import { responseMovie } from "./videoResponse";

// const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

const VideoDetailsScreen = () => {
  // const router = useRouter();
  const params = useLocalSearchParams();
  const videoRef = useRef<VideoRef>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(false);
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
        videoUrl: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`,
        title: videoData.snippet.title,
        description: videoData.snippet.description,
        views: videoData.statistics.viewCount,
        likes: videoData.statistics.likeCount,
      });
    } catch (error) {
      console.error("Error fetching video details: ", error);
    }
  };

  return (
    <ThemedLayout style={{ flex: 1 }}>
      <View style={[{ flex: 1 }]}>
        <View style={styles.container}>
          <Video
            ref={videoRef}
            source={{ uri: videoDetails.videoUrl }}
            onTouchStart={() => setControlsVisible((state) => !state)}
            style={styles.video}
            paused={isPaused}
            controls={false}
            resizeMode="cover"
          />

          {controlsVisible && (
            <VideoControls
              setControlsVisible={setControlsVisible}
              setIsPaused={setIsPaused}
            />
          )}
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.title}>{videoDetails.title}</Text>
            <Text style={styles.description}>{videoDetails.description}</Text>
            <View style={styles.statsContainer}>
              <Text style={styles.stats}>Views: {videoDetails.views}</Text>
              <Text style={styles.stats}>Likes: {videoDetails.likes}</Text>
            </View>
          </View>
        </View>
      </View>
    </ThemedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -24,
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
    height: 280,
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
