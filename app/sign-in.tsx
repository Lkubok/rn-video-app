import { useSession } from "@/core/auth/AuthContext";
import { i18n } from "@/translations/i18n";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        {i18n.t("auth.signIn")}
      </Text>
    </View>
  );
}
