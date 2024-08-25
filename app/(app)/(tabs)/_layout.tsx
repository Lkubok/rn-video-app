import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";

import CustomTabBar from "@/components/navigation/CustomTabBar";
import TabBarIcon from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { i18n } from "@/translations/i18n";
import { useAppTheme } from "@/ui/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { colors } = useAppTheme();

  useEffect(() => {
    const asyncEffect = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync(colors.secondaryBackground);
      }
    };
    asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: i18n.t("navigation.tabs.home"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: i18n.t("navigation.tabs.search"),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
