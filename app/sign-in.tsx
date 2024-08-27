import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import AppIcon from "@/assets/images/app-icon.svg";
import { Logo } from "@/components/Logo/Logo";
import { TextLink } from "@/components/TextLink/TextLink";
import { ThemedButton } from "@/components/ThemedButton/ThemedButton";
import { ThemedLayout } from "@/components/ThemedLayout";
import { links } from "@/constants/links";
import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";
import { styles } from "@/ui/screenStyles/sign-in.styles";
import { useAppTheme } from "@/ui/theme";

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
    <ThemedLayout
      style={[
        styles.container,
        { backgroundColor: colors.secondaryBackground },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Logo />
        </View>

        <View style={styles.mainIcon}>
          <AppIcon height={128} width={128} />
        </View>

        <View style={styles.footer}>
          <Text
            variant="titleLarge"
            style={[styles.welcome, { color: colors.onSecondaryBackground }]}
          >
            {i18n.t("auth.welcome_title")}
          </Text>

          <ThemedButton
            onPress={onSignInHandler}
            text={i18n.t("auth.log_in_as_guest")}
          />

          <View style={styles.footerTextBox}>
            <Text
              style={[styles.infoText, { color: colors.onSecondaryBackground }]}
              variant="labelMedium"
            >
              {i18n.t("auth.footer_main_text")}
            </Text>
            <View style={styles.info}>
              <TextLink
                text={i18n.t("common.terms_and_conditions")}
                onPress={() => handleLinkPress(links.privacyPolicy)}
              />

              <Text
                style={[
                  styles.infoText,
                  { color: colors.onSecondaryBackground },
                ]}
                variant="labelMedium"
              >
                {` ${i18n.t("common.and")} `}
              </Text>

              <TextLink
                text={i18n.t("common.privacy_policy")}
                onPress={() => handleLinkPress(links.privacyPolicy)}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemedLayout>
  );
};

export default SignIn;
