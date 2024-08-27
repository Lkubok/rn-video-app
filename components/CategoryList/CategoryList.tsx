import { Link } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { getInitialVideosData } from "@/store/videosActions";
import { i18n } from "@/translations/i18n";
import { CategoryItem } from "@/types/types";
import { useAppTheme } from "@/ui/theme";

import VideoItem from "../VideoItem/VideoItem";
import { styles } from "./CategoryList.styles";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channelName: string;
}

type CategoryListProps = {
  category: CategoryItem;
};

export const CategoryList = ({ category }: CategoryListProps) => {
  const { colors } = useAppTheme();
  const dispatch = useAppDispatch();
  const storedVideos = useAppSelector((state) => state.videos.initialVideos);

  const videos: Video[] = storedVideos
    .filter((vid) => vid.q === category.baseSearchWord)
    .map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
      channelName: item.snippet.channelId,
    }));

  useEffect(() => {
    dispatch(
      getInitialVideosData({
        q: category.baseSearchWord,
        maxResults: 3, // NOTE: 3 is for API quota limit //TODO: change to 10 at the end
        order: "relevance",
        part: "snippet",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({ item }: { item: Video }) => (
    <VideoItem variant="small" item={item} />
  );

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderTopWidth: category.id === 1 ? 0 : 2,
            borderTopColor: colors.primary,
          },
        ]}
      >
        <Text variant="labelLarge">{category.name}</Text>

        <Link
          href={{
            pathname: `/search`,
            params: { query: category.baseSearchWord },
          }}
          style={styles.showMore}
          asChild
        >
          <TouchableOpacity
            hitSlop={{ bottom: 12, top: 12, left: 12, right: 12 }}
          >
            <Text variant="labelSmall" style={styles.showMore}>
              {i18n.t("common.show_more")}
            </Text>
          </TouchableOpacity>
        </Link>
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
