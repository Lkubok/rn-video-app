import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import LikeIcon from "@/assets/icons/likes-icon.svg";
import ViewsIcon from "@/assets/icons/views-icon.svg";

import { styles } from "./Badge.styles";

interface BadgeProps {
  icon: "like" | "views";
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, text }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {icon === "like" ? (
        <LikeIcon
          fill={"white"}
          style={{ marginRight: 8 }}
          height={20}
          width={20}
        />
      ) : (
        <ViewsIcon
          fill={"white"}
          style={{ marginRight: 8 }}
          height={20}
          width={20}
        />
      )}
      <Text variant="headlineSmall" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;
