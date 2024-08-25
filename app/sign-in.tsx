import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import AppIcon from "@/assets/images/app-icon.svg";
import { Logo } from "@/components/Logo/Logo";
import { ThemedButton } from "@/components/ThemedButton/ThemedButton";
import { ThemedLayout } from "@/components/ThemedLayout";
import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";

import { useAppTheme } from "./_layout";

export const SignIn = () => {
  const { signIn } = useSession();
  const { colors } = useAppTheme();
  const onSignInHandler = () => {
    signIn();
    router.replace("/");
  };

  const handleLinkPress = async (uri: string) =>
    await WebBrowser.openBrowserAsync(uri);

  return (
    <ThemedLayout style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.appLogo}>
          <AppIcon height={128} width={128} />
        </View>
        <View style={styles.footer}>
          <Text
            variant="titleLarge"
            style={{
              color: colors.onSecondaryBackground,
              alignSelf: "flex-start",
              marginBottom: 32,
            }}
          >
            {i18n.t("auth.welcome_title")}
          </Text>
          <ThemedButton
            onPress={onSignInHandler}
            text={i18n.t("auth.log_in_as_guest")}
          />
          <View
            style={{
              marginVertical: 16,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontWeight: "400", color: colors.onSecondaryBackground }}
              variant="labelMedium"
            >
              {i18n.t("auth.footer_main_text")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() =>
                  handleLinkPress(
                    "https://play.google.com/about/play-terms/index.html"
                  )
                }
              >
                <Text
                  style={{
                    fontWeight: "400",
                    color: colors.primary,
                    textDecorationLine: "underline",
                  }}
                  variant="labelMedium"
                >
                  {i18n.t("common.terms_and_conditions")}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "400",
                  color: colors.onSecondaryBackground,
                }}
                variant="labelMedium"
              >{` ${i18n.t("common.and")} `}</Text>
              <TouchableOpacity
                onPress={() =>
                  handleLinkPress("https://policies.google.com/privacy")
                }
              >
                <Text
                  style={{
                    fontWeight: "400",
                    color: colors.primary,
                    textDecorationLine: "underline",
                  }}
                  variant="labelMedium"
                >
                  {i18n.t("common.privacy_policy")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default SignIn;
