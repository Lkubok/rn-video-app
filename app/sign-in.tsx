import { Logo } from "@/components/Logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
// import { View } from "react-native";
// import { Button, Text } from "react-native-paper";
import AppIcon from "@/assets/images/app-icon.svg";
import { ThemedButton } from "@/components/ThemedButton/ThemedButton";

export default function SignIn() {
  const { signIn } = useSession();
  const onSignInHandler = () => {
    signIn();
    router.replace("/");
  };
  return (
    <ThemedView style={styles.container}>
      <Logo />
      <AppIcon />

      {/* <Text
        variant="bodySmall"
        style={{ fontFamily: "PoppinsRegular" }}
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        {i18n.t("auth.signIn")}
      </Text> */}
      <ThemedButton
        onPress={onSignInHandler}
        text={i18n.t("auth.login_as_guest")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
