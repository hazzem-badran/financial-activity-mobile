import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { ActivitiesItemProps } from "@/types/activity.types";
import { formatDate } from "@/utils/formatDate";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const CATEGORY_ICONS = {
  "food": "fast-food",
  "Food & Drink": "fast-food",
  Shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Income: "cash",
  Other: "ellipsis-horizontal",
} as const;

type Category = keyof typeof CATEGORY_ICONS;



const ActivitiesItem = ({ item, onDelete }: ActivitiesItemProps) => {
  
  // console.log("item:", item);

  const isIncome = parseFloat(item.amount) > 0;
  const iconName = CATEGORY_ICONS[item.category as Category] || "ellipsis-horizontal";
  
  // console.log("Category:", item.category, "Icon:", iconName);
  
  return (
    <View style={styles.transactionCard}>
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons name={iconName} size={22} color={isIncome? COLORS.income: COLORS.expense}/>
        </View>
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text style={[styles.transactionAmount,{color: isIncome? COLORS.income: COLORS.expense}]}>
            {isIncome ? "+" : "-"}${Math.abs(parseFloat(item.amount)).toFixed(2)}
          </Text>
          <Text style={styles.transactionDate}>{formatDate(item.created_at)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(String(item.id))}>
        <Ionicons name="trash-outline" size={20} color={COLORS.expense}/>
      </TouchableOpacity>
    </View>
  );
};

export default ActivitiesItem;
