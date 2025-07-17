import { styles } from "@/styles/create.styles";
import { COLORS } from "@/theme/colors";
import { ICategorySelectorProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export function CategorySelector({
  selectedCategory,
  onSelectCategory,
  categories,
}: ICategorySelectorProps) {
  return (
    <>
      <Text style={styles.sectionTitle}>
        <Ionicons name="pricetag-outline" size={16} color={COLORS.text} />
        Category
      </Text>
      <View style={styles.categoryGrid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.name && styles.categoryButtonActive,
            ]}
            onPress={() => onSelectCategory(category.name)}
          >
            <Ionicons
              name={category.icon as any}
              size={20}
              color={
                selectedCategory === category.name ? COLORS.white : COLORS.text
              }
              style={styles.categoryIcon}
            />

            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category.name &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
