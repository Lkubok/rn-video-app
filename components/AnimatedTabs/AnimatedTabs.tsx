import React, { useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { i18n } from "@/translations/i18n";

import { styles } from "./AnimatedTabs.styles";

type Props = {};

export const AnimatedTabs: React.FC = (props: Props) => {
  const [, setActiveTab] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const [tabWidth, setTabWidth] = useState(0);
  const { colors } = useTheme();

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        console.log(e.nativeEvent.layout.width);
        setTabWidth(e.nativeEvent.layout.width / 2);
      }}
    >
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress(0)}>
          <Text variant="bodyMedium" style={styles.tabText}>
            {i18n.t("details.details")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress(1)}>
          <Text variant="bodyMedium" style={styles.tabText}>
            {i18n.t("details.notes")}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            height: 2,
            width: "100%",
            bottom: 0,
            backgroundColor: colors.backdrop,
          }}
        />
        <Animated.View
          style={[
            styles.animatedTab,
            {
              backgroundColor: colors.primary,
              width: tabWidth,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default AnimatedTabs;
