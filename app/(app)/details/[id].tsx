import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video, { VideoRef } from "react-native-video";

import AirPlayIcon from "@/assets/icons/airplay-icon.svg";
import BackwardIcon from "@/assets/icons/backward-icon.svg";
import ForwardIcon from "@/assets/icons/forward-icon.svg";
import FullscreenIcon from "@/assets/icons/fullscreen-icon.svg";
import LeftArrow from "@/assets/icons/leftarrow-icon.svg";
import PlayIcon from "@/assets/icons/play-icon.svg";
import SoundIcon from "@/assets/icons/volume-icon.svg";
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
        // videoUrl: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`,
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

  const movie = require("./test.mp4");

  const videoRef = useRef<VideoRef>(null);

  // useEffect(() => {
  // videoRef.current?.resume();
  // }, []);
  const [isPaused, setIsPaused] = useState(true);
  const play = () => {
    // videoRef.current?.(1.0);
    setIsPaused((state) => !state);
  };
  const [controlsVisible, setControlsVisible] = useState(false);

  return (
    <ThemedLayout style={{ flex: 1 }}>
      <View style={[{ flex: 1 }]}>
        <View style={styles.container}>
          {/* <TouchableOpacity style={styles.backButton} onPress={() => play()}>
            <Text style={styles.backButtonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity> */}
          <Video
            ref={videoRef}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              // uri: videoDetails.videoUrl,
            }}
            onTouchStart={() => setControlsVisible((state) => !state)}
            style={styles.video}
            paused={isPaused}
            controls={false}
            resizeMode="cover"
          />
          {/* <TouchableOpacity
            style={styles.video}
            onPress={() => setControlsVisible((state) => !state)}
          /> */}
          {controlsVisible && (
            <TouchableOpacity
              onPress={() => setControlsVisible(false)}
              style={{
                position: "absolute",
                top: 0,
                height: 280,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: StatusBar.currentHeight,
                  paddingHorizontal: 24,
                  // flex: 1,
                  width: "100%",
                  // borderWidth: 2,
                  // borderColor: "red",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => router.back()}
                >
                  <LeftArrow height={24} width={24} />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    // borderWidth: 2,
                    // borderColor: "aqua",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 32,
                      width: 32,
                      borderRadius: 16,
                      backgroundColor: "rgba(0,0,0,0.25)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 8,
                    }}
                    onPress={() => {}}
                  >
                    <SoundIcon height={24} width={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: 32,
                      width: 32,
                      borderRadius: 16,
                      backgroundColor: "rgba(0,0,0,0.25)",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 8,
                    }}
                    onPress={() => {}}
                  >
                    <AirPlayIcon height={24} width={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  // borderWidth: 2,
                  // borderColor: "green",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {}}
                >
                  <BackwardIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    justifyContent: "center",
                    alignItems: "center",
                    // paddingHorizontal: "48",
                    margin: 64,
                  }}
                  onPress={() => setIsPaused((state) => !state)}
                >
                  <PlayIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {}}
                >
                  <ForwardIcon />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  // borderWidth: 2,
                  // borderColor: "red",
                  height: 40,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingHorizontal: 24,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    // borderRadius: 16,
                    // backgroundColor: "rgba(0,0,0,0.25)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {}}
                >
                  <FullscreenIcon width={24} height={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    // padding: 10,
    // backgroundColor: "#fff",
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
    // borderWidth: 10,
    // borderColor: "red",
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
