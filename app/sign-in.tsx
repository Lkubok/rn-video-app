import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import AppIcon from "@/assets/images/app-icon.svg";
import { Logo } from "@/components/Logo/Logo";
import { ThemedButton } from "@/components/ThemedButton/ThemedButton";
import { ThemedLayout } from "@/components/ThemedLayout";
import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";

export const SignIn = () => {
  const { signIn } = useSession();
  const onSignInHandler = () => {
    signIn();
    router.replace("/");
  };

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
          <Text>aaa</Text>
          <ThemedButton
            onPress={onSignInHandler}
            text={i18n.t("auth.login_as_guest")}
          />
          <Text>aaa</Text>
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
