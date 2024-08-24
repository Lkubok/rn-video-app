import { useSession } from "@/core/auth/AuthContext";
import { Text, View } from "react-native";

export default function SignOutScreen() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
