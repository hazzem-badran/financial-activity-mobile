import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";

interface NoPlannedPurchasesProps {
  focusInput: () => void;
}

const NoPlannedPurchases = ({ focusInput }: NoPlannedPurchasesProps) => {
  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        style={styles.emptyStateIcon}
        color={COLORS.textLight}
      />

      <Text style={styles.emptyStateTitle}>No Planned Purchases Yet</Text>
      <Text style={styles.emptyStateText}>
        Start planning ahead by adding items you want to buy
      </Text>

      <TouchableOpacity style={styles.emptyStateButton} onPress={focusInput}>
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={styles.emptyStateButtonText}>Add Purchases</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoPlannedPurchases;
