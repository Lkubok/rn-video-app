import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import { i18n } from "@/translations/i18n";
import { useAppTheme } from "@/ui/theme";

import { storedResponse } from "./storedResponse";

const CHANNEL_ID = "";

const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

type CategoryListProps = {
  category: string;
  id: number;
};

export const CategoryList = ({ category, id }: CategoryListProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const { colors } = useAppTheme();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const response = await axios.get(
        //   `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=10`
        // );
        // console.log("response", response);
        const response2 = storedResponse;

        const videoData = response2.data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt,
        }));
        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, []);

  const renderItem = ({ item }: { item: Video }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <Text variant="headlineSmall" style={[{ alignSelf: "flex-end" }]}>
        {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
      </Text>
    </View>
  );

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
          marginBottom: 24,
          borderTopWidth: id === 1 ? 0 : 2,
          borderTopColor: colors.primary,
          paddingHorizontal: 24,
          paddingTop: 8,
        }}
      >
        <Text variant="labelLarge">{category}</Text>
        <TouchableOpacity
          onPress={() => console.log("Show more")}
          hitSlop={{ bottom: 12, top: 12, left: 12, right: 12 }}
        >
          <Text
            variant="labelSmall"
            style={{ textDecorationLine: "underline", color: colors.primary }}
          >
            {i18n.t("common.show_more")}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={videos}
        style={{ paddingHorizontal: 24 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {},
  itemContainer: {
    marginRight: 24,
    width: 180,
    marginBottom: 24,
  },
  thumbnail: {
    width: "100%",
    height: 112,
    borderRadius: 16,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CategoryList;
