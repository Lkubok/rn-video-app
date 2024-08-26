// import axios from "axios";
import { router, useFocusEffect } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  // Image,
  SafeAreaView,
  StatusBar,
  // StyleSheet,
  TouchableOpacity,
  // Text,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import SearchBar from "@/components/SearchBar/SearchBar";
import { ThemedLayout } from "@/components/ThemedLayout";
import VideoItem from "@/components/VideoItem/VideoItem";
import { useAppSelector } from "@/store/store";
import { i18n } from "@/translations/i18n";
import { styles } from "@/ui/screenStyles/search.styles";

// import { styles } from "@/ui/screenStyles/home.styles";
import { testResponse } from "./testResponse";

// const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("react");
  const [videos, setVideos] = useState<Video[]>([]);
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [searchedPhrase, setSearchedPhrase] = useState<string>("ReactNative");
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const initialSearchedPhrase = useAppSelector(
    (state) => state.search.searchedPhrase
  );

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchVideos();
    } else {
      setVideos([]);
    }
  }, [searchQuery]);

  useFocusEffect(() => {
    initialSearchedPhrase && setSearchQuery(initialSearchedPhrase);
  });

  const onSortChangePress = () => {};

  const fetchVideos = async (pageToken: string | null = null) => {
    try {
      // const response = await axios.get(
      // `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${searchQuery}&part=snippet&maxResults=10${pageToken ? `&pageToken=${pageToken}` : ""}`
      // );
      // console.log(response);
      const response = testResponse;
      const videoData = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
        channelName: item.snippet.channelTitle,
        // videoUrl: item.sni
      }));
      setVideos((prevVideos) => [...prevVideos, ...videoData]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  const renderItem = ({ item }: { item: Video }) => (
    <VideoItem
      item={item}
      variant="large"
      onPress={() => {
        router.push("details", { videoId: item.id });
      }}
    />
  );

  const handleEndReached = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <ThemedLayout style={styles.layout}>
      <SafeAreaView
        style={[styles.safeArea, { paddingTop: StatusBar.currentHeight }]}
      >
        <View style={styles.header}>
          <SearchBar
            onChangeText={setSearchQuery}
            placeholder={i18n.t("home.searchBarPlaceholder")}
            value={searchQuery}
          />
          <Text
            variant="headlineSmall"
            style={{ alignSelf: "flex-start", marginTop: 12 }}
          >
            {numberOfResults} {i18n.t("search.results_found")}
            <Text
              variant="headlineSmall"
              style={{ fontWeight: "700", fontFamily: "PoppinsBold" }}
            >{`"${searchedPhrase}"`}</Text>
          </Text>
          <TouchableOpacity onPress={onSortChangePress}>
            <Text variant="labelSmall" style={{ alignSelf: "flex-end" }}>
              {i18n.t("search.sort_by")}
              <Text
                variant="labelSmall"
                style={{ fontFamily: "PoppinsSemiBold" }}
              >
                {i18n.t("search.sort_option_popular")}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}_${item.title}`}
          style={{ marginTop: 44 }}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </ThemedLayout>
  );
}
