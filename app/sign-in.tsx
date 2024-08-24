import { Logo } from "@/components/Logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";
import { router } from "expo-router";
// import { View } from "react-native";
import { Text } from "react-native-paper";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Logo />
      <Text
        style={{ fontFamily: "PoppinsRegular" }}
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        {i18n.t("auth.signIn")}
      </Text>
    </ThemedView>
  );
}
