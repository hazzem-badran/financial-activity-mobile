import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";

const NoActivitiesFond = () => {
  const router = useRouter();
  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        style={styles.emptyStateIcon}
        color={COLORS.textLight}
      />

      <Text style={styles.emptyStateTitle}>No Transaction Yet</Text>
      <Text style={styles.emptyStateText}>
        Start tracking yout finaces by adding your first transaction
      </Text>

      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={() => router.push("/create")}
      >
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoActivitiesFond;
