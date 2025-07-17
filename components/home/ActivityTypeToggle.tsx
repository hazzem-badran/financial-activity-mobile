import { COLORS } from "@/app/theme/colors";
import { styles } from "@/assets/styles/create.styles";
import { ACTIVITY_TYPES, IActivityTypeToggleProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const ActivityTypeToggle = ({
  isExpense,
  setIsExpense,
}: IActivityTypeToggleProps) => {
  return (
    <View style={styles.typeSelector}>
      {ACTIVITY_TYPES.map((type) => (
        <TouchableOpacity
          key={type.label}
          style={[
            styles.typeButton,
            isExpense === type.value && styles.typeButtonActive,
          ]}
          onPress={() => setIsExpense(type.value)}
        >
          <Ionicons
            name={type.icon}
            size={22}
            color={isExpense === type.value ? COLORS.white : COLORS.expense}
          />
          <Text
            style={[
              styles.typeButtonText,
              isExpense === type.value && styles.typeButtonTextActive,
            ]}
          >
            {type.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

