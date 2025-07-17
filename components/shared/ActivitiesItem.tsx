import { COLORS } from "@/app/theme/colors";
import { styles } from "@/assets/styles/home.styles";
import { IActivitiesItemProps } from "@/types/activity.types";
import { formatDate } from "@/utils/formatDate";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const CATEGORY_ICONS = {
  food: "fast-food",
  "Food & Drink": "fast-food",
  Shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Income: "cash",
  Other: "ellipsis-horizontal",
} as const;

type Category = keyof typeof CATEGORY_ICONS;

export const ActivitiesItem = ({
  item,
  onDelete,
  showPrice = false,
}: IActivitiesItemProps) => {
  const isIncome = parseFloat(item.amount || "0") > 0;
  const iconName =
    CATEGORY_ICONS[item.category as Category] || "ellipsis-horizontal";

  return (
    <View style={styles.activityCard}>
      <TouchableOpacity style={styles.activityContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name={iconName}
            size={22}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.activityLeft}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          <Text style={styles.activityCategory}>{item.category}</Text>
        </View>
        <View style={styles.activityRight}>
          {!showPrice && (
            <Text
              style={[
                styles.activityAmount,
                { color: isIncome ? COLORS.income : COLORS.expense },
              ]}
            >
              {isIncome ? "+" : "-"}$
              {Math.abs(parseFloat(item.amount || "0")).toFixed(2)}
            </Text>
          )}
          <Text style={styles.activityDate}>{formatDate(item.created_at)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(String(item.id))}
      >
        <Ionicons name="trash-outline" size={20} color={COLORS.expense} />
      </TouchableOpacity>
    </View>
  );
};

