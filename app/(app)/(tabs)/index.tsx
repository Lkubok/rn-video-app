import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SettingsIcon from "@/assets/icons/settings-icon.svg";
import CategoryList from "@/components/CategoryList/CategoryList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ThemedLayout } from "@/components/ThemedLayout";
import { useSession } from "@/core/auth/AuthContext";
import { categories } from "@/models/categories";
import { i18n } from "@/translations/i18n";
import { styles } from "@/ui/screenStyles/home.styles";

export default function HomeScreen() {
  const { signOut } = useSession();
  // TODO: add settings screen instead logout functionality
  const onSettingsPress = () => signOut();

  return (
    <ThemedLayout style={[styles.layout]}>
      <ScrollView
        style={styles.marginReset}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.marginRestore}>
            <View style={styles.header}>
              <SearchBar
                placeholder={i18n.t("home.searchBarPlaceholder")}
                value={""}
                onPress={() => router.push("/search")}
                mode="button"
              />

              <TouchableOpacity
                onPress={onSettingsPress}
                style={styles.settings}
              >
                <SettingsIcon height={32} width={32} />
              </TouchableOpacity>
            </View>
          </View>

          {categories
            .sort((a, b) => a.id - b.id)
            .map((category) => (
              <CategoryList category={category} />
            ))}
        </SafeAreaView>
      </ScrollView>
    </ThemedLayout>
  );
}
