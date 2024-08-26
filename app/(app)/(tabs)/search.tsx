import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import SearchBar from "@/components/SearchBar/SearchBar";
import { ThemedLayout } from "@/components/ThemedLayout";
import VideoItem from "@/components/VideoItem/VideoItem";
import { testResponse } from "@/testResponse";
import { i18n } from "@/translations/i18n";
import { styles } from "@/ui/screenStyles/search.styles";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channelName: string;
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [numberOfResults] = useState<number>(0);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const params = useLocalSearchParams<{ query?: string }>();
  console.log("params", params);

  useEffect(() => {
    params.query && setSearchQuery(params.query);
  }, [params.query]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchVideos();
    } else {
      setVideos([]);
    }
  }, [searchQuery]);

  const onSortChangePress = () => {};

  const fetchVideos = async (pageToken: string | null = null) => {
    try {
      const response = testResponse;
      // TODO: remove unnecessary data from project structure
      const videoData = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt,
        channelName: item.snippet.channelTitle,
      }));
      setVideos((prevVideos) => [...prevVideos, ...videoData]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  const renderItem = ({ item }: { item: Video }) => (
    <VideoItem item={item} variant="large" />
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
            >{`"${searchQuery}"`}</Text>
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
