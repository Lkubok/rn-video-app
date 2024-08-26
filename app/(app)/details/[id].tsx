// import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Video, { VideoRef } from "react-native-video";

import PersonIcon from "@/assets/icons/person-icon.svg";
import AnimatedTabs from "@/components/AnimatedTabs/AnimatedTabs";
import Badge from "@/components/Badge/Badge";
import { ThemedLayout } from "@/components/ThemedLayout";
import VideoControls from "@/components/VideoControls/VideoControls";
import { i18n } from "@/translations/i18n";

import { responseMovie } from "./videoResponse";

// const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

const VideoDetailsScreen = () => {
  // const router = useRouter();
  const params = useLocalSearchParams();
  const videoRef = useRef<VideoRef>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(false);
  const { id } = params;
  const { colors } = useTheme();

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
            <Text variant="labelLarge" style={styles.title} numberOfLines={1}>
              {videoDetails.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 24,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: colors.primary,
                  height: 48,
                  width: 48,
                  borderRadius: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 24,
                }}
              >
                <PersonIcon stroke={"white"} height={24} width={24} />
              </View>
              <Text variant="headlineMedium" style={styles.stats}>
                Channel name to change
              </Text>
            </View>
            {/* <View>
              <Text style={{ color: "red", fontSize: 24 }}>
                TAB NAVIGATOR TO ADD
              </Text>
            </View> */}
            <View style={{}}>
              <AnimatedTabs />
            </View>
            <View>
              <Text
                variant="headlineSmall"
                style={{
                  fontSize: 12,
                  fontFamily: "PoppinsSemiBold",
                }}
              >
                {i18n.t("details.descriptionHeader")}
              </Text>
              <Text variant="labelSmall" style={styles.description}>
                {videoDetails.description}
              </Text>
              <Text
                variant="headlineSmall"
                style={{
                  fontSize: 12,
                  fontFamily: "PoppinsSemiBold",
                }}
              >
                {i18n.t("details.statisticsHeader")}
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <Badge
                icon="views"
                text={`${videoDetails.views} ${i18n.t("details.views")}`}
              />
              <Badge
                icon="like"
                text={`${videoDetails.views} ${i18n.t("details.likes")}`}
              />
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
    // fontSize: 16,
    color: "blue",
  },
  video: {
    width: "100%",
    height: 280,
  },
  title: {
    marginTop: 24,
    // fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    marginBottom: 24,
    // fontSize: 16,
    lineHeight: 14,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stats: {
    // fontSize: 16,
  },
});

export default VideoDetailsScreen;
