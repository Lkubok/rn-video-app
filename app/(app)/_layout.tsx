import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

import { useSession } from "@/core/auth/AuthContext";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function AppLayout() {
  const { session, isLoading } = useSession();
  const colorScheme = useColorScheme();

  if (isLoading) {
    // TODO: add loading indicator
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
