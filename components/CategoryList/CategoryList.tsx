// import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import { i18n } from "@/translations/i18n";
import { useAppTheme } from "@/ui/theme";

import VideoItem from "../VideoItem/VideoItem";
import { styles } from "./CategoryList.styles";
import { storedResponse } from "./storedResponse";

// const CHANNEL_ID = "";
// const YOUTUBE_API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;

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
    // TODO: extract logic, maybe to REDUX / REDUX TOOLKIT
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

  const renderItem = ({ item }: { item: Video }) => <VideoItem item={item} />;

  return (
    <>
      <View
        style={[
          styles.container,
          { borderTopWidth: id === 1 ? 0 : 2, borderTopColor: colors.primary },
        ]}
      >
        <Text variant="labelLarge">{category}</Text>

        <TouchableOpacity
          onPress={() => console.log("Show more")}
          hitSlop={{ bottom: 12, top: 12, left: 12, right: 12 }}
        >
          <Text variant="labelSmall" style={styles.showMore}>
            {i18n.t("common.show_more")}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={videos}
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

export default CategoryList;
