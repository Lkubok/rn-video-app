import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

import { largeStyles, smallStyles } from "./VideoItem.styles";

type Props = {
  item: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    channelName: string;
  };
  variant: "small" | "large";
};

export const VideoItem = ({ item, variant = "small" }: Props) => {
  const renderSmallVideoItem = () => (
    <View style={smallStyles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={smallStyles.thumbnail} />
      <Text variant="bodySmall" numberOfLines={2} style={smallStyles.title}>
        {item.title}
      </Text>
      <Text variant="headlineSmall" style={smallStyles.date}>
        {/* TODO: change locale string according to device settings */}
        {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
      </Text>
    </View>
  );

  const renderLargeVideoItem = () => (
    <View style={largeStyles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={largeStyles.thumbnail} />
      <Text variant="bodyMedium" style={largeStyles.title}>
        {/* TODO: add channel name */}
        {/* {item.channelName} */}
        {item.id}
      </Text>
      <Text variant="displayMedium" style={largeStyles.description}>
        {item.title}
      </Text>
      <Text variant="headlineSmall" style={largeStyles.date}>
        {/* TODO: change locale string according to device settings */}
        {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
      </Text>
    </View>
  );
  return variant === "small" ? renderSmallVideoItem() : renderLargeVideoItem();
};

export default VideoItem;
