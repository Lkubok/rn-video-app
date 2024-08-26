import { Link } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
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
  onPress?: () => void;
};

export const VideoItem = ({ item, variant = "small", onPress }: Props) => {
  const renderSmallVideoItem = () => (
    <Link
      href={{
        pathname: "/details/[id]",
        params: { id: item.id, item: item as any },
      }}
      asChild
    >
      <TouchableOpacity style={smallStyles.itemContainer} onPress={() => {}}>
        <Image source={{ uri: item.thumbnail }} style={smallStyles.thumbnail} />
        <Text variant="bodySmall" numberOfLines={2} style={smallStyles.title}>
          {item.title}
        </Text>
        <Text variant="headlineSmall" style={smallStyles.date}>
          {/* TODO: change locale string according to device settings */}
          {new Date(item.publishedAt).toLocaleDateString("pl-PL")}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  const renderLargeVideoItem = () => (
    <Link
      href={{
        pathname: "/details/[id]",
        params: { id: item.id, item: item as any },
      }}
      asChild
    >
      <TouchableOpacity style={largeStyles.itemContainer}>
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
      </TouchableOpacity>
    </Link>
  );
  return variant === "small" ? renderSmallVideoItem() : renderLargeVideoItem();
};

export default VideoItem;
