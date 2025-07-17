import { styles } from "@/styles/home.styles";
import { COLORS } from "@/theme/colors";
import React from "react";
import { Text, View } from "react-native";

export const BalanceCard = ({ summary }: any) => {
  // Handle case where summary might be a number or an object
  const totalBalance =
    typeof summary === "number" ? summary : parseFloat(summary?.balance || "0");
  const totalIncome = parseFloat(summary?.income || "0");
  const totalExpenses = parseFloat(summary?.expenses || "0");
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>${totalBalance.toFixed(2)}</Text>

      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expenses</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(totalExpenses).toFixed(2)}
          </Text>
        </View>

        <View style={[styles.balanceStats, styles.statDivider]} />

        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            +${totalIncome.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

