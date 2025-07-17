import { COLORS } from "@/app/theme/colors";
import { styles } from "@/assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


export const NoActivitiesFound = () => {
  const router = useRouter();
  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        style={styles.emptyStateIcon}
        color={COLORS.textLight}
      />

      <Text style={styles.emptyStateTitle}>No Activities Yet</Text>
      <Text style={styles.emptyStateText}>
        Start tracking yout finaces by adding your first Activities
      </Text>

      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={() => router.push("/create")}
      >
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={styles.emptyStateButtonText}>Add Activities</Text>
      </TouchableOpacity>
    </View>
  );
};