import { ScrollView, View } from "react-native";

import CategoryList from "@/components/CategoryList/CategoryList";
import { ThemedLayout } from "@/components/ThemedLayout";
import { categories } from "@/models/categories";

export default function HomeScreen() {
  return (
    <ThemedLayout style={{ flex: 1 }}>
      <ScrollView
        style={{ marginHorizontal: -24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{ height: 300, borderWidth: 4, borderColor: "red" }}
          ></View>
          {categories
            .sort((a, b) => a.id - b.id)
            .map((category) => (
              <CategoryList
                key={category.id}
                category={category.name}
                id={category.id}
              />
            ))}
        </View>
      </ScrollView>
    </ThemedLayout>
  );
}
