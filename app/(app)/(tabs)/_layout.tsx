import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

import HomeIcon from "@/assets/icons/home-icon.svg"; // Adjust the path to your SVG files
import SearchIcon from "@/assets/icons/search-icon.svg"; // Adjust the path to your SVG files
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { i18n } from "@/translations/i18n";
import { useAppTheme } from "@/ui/theme";

interface TabBarIconProps {
  name: "home" | "search"; // Add other icon names here
  color: string;
  size?: number;
}

const icons = {
  home: HomeIcon,
  search: SearchIcon,
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 24 }) => {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <Icon
      width={size}
      height={size}
      stroke={color}
      fill={name === "home" ? color : undefined}
    />
  );
};

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

  const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
    const { colors } = useAppTheme();
    const { state, descriptors, navigation } = props;

    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.secondaryBackground,
          paddingBottom: Platform.OS === "android" ? 0 : 20,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
                padding: 10,
              }}
            >
              {options.tabBarIcon?.({
                color: isFocused ? colors.primary : colors.background,
                focused: isFocused,
                size: 24,
              })}
              <Text
                variant="titleSmall"
                style={{
                  color: isFocused ? colors.primary : colors.background,
                }}
              >
                {label as string}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

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
