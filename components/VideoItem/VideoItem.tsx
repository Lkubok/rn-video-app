import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./VideoItem.styles";

type Props = {
  item: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
  };
};

export const VideoItem = ({ item }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <Text variant="headlineSmall" style={[{ alignSelf: "flex-end" }]}>
        {/* TODO: change locale string according to device settings */}
        {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
      </Text>
    </View>
  );
};

export default VideoItem;
