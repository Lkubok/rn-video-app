import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchVideos } from "@/store/videosActions";
import { resetSearchedVideos } from "@/store/videosStore";
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
  const [numberOfResults] = useState<number>(0);
  const params = useLocalSearchParams<{ query?: string }>();
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const nextPageToken = useAppSelector((state) => state.videos.nextPageToken);
  const dispatch = useAppDispatch();
  const videosItems = useAppSelector((state) => state.videos.searchedVideos);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const videos = videosItems.map((item: any) => ({
    id: item?.id?.videoId,
    title: item?.snippet?.title,
    thumbnail: item?.snippet?.thumbnails.medium.url,
    publishedAt: item?.snippet?.publishedAt,
    channelName: item?.snippet?.channelTitle,
  }));

  useEffect(() => {
    params.query && setSearchQuery(params.query);
  }, [params.query]);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      dispatch(
        fetchVideos({
          q: debouncedQuery,
          pageToken: nextPageToken,
          maxResults: 1,
        })
      );
    } else {
      dispatch(resetSearchedVideos());
    }
  }, [debouncedQuery, dispatch, nextPageToken]);

  const onSortChangePress = () => {};

  const renderItem = ({ item }: { item: Video }) => (
    <VideoItem item={item} variant="large" />
  );

  const handleEndReached = () => {
    if (nextPageToken) {
      dispatch(fetchVideos({ q: searchQuery, pageToken: nextPageToken }));
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
