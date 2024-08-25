import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SettingsIcon from "@/assets/icons/settings-icon.svg";
import CategoryList from "@/components/CategoryList/CategoryList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ThemedLayout } from "@/components/ThemedLayout";
import { categories } from "@/models/categories";

export default function HomeScreen() {
  return (
    <ThemedLayout style={{ flex: 1 }}>
      <ScrollView
        style={{ marginHorizontal: -24 }}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              marginHorizontal: 24,
              marginBottom: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <SearchBar
                onChangeText={() => {}}
                placeholder={"sss"}
                value={"sss"}
              />
              <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 8 }}>
                <SettingsIcon height={32} width={32} />
              </TouchableOpacity>
            </View>
          </View>
          {categories
            .sort((a, b) => a.id - b.id)
            .map((category) => (
              <CategoryList
                key={category.id}
                category={category.name}
                id={category.id}
              />
            ))}
        </SafeAreaView>
      </ScrollView>
    </ThemedLayout>
  );
}
