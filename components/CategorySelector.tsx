import { COLORS } from "@/constants/colors";
import { CategorySelectorProps } from "@/types/components.types";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from"@/assets/styles/create.styles";

export default function CategorySelector({
  selectedCategory,
  onSelectCategory,
  categories,
}: CategorySelectorProps) {
  return (
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
            color={selectedCategory === category.name ? COLORS.white : COLORS.text}
            style={styles.categoryIcon}
          />

          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === category.name && styles.categoryButtonTextActive,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
