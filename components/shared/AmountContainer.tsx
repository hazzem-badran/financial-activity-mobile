import { COLORS } from "@/app/theme/colors";
import { styles } from "@/assets/styles/create.styles";
import { IAmountContainerProps } from "@/types";
import React from "react";
import { Text, TextInput, View } from "react-native";



export const AmountContainer = ({
  amount,
  setAmount,
}: IAmountContainerProps) => {
  return (
    <View style={styles.amountContainer}>
      <Text style={styles.currencySymbol}>$</Text>
      <TextInput
        style={styles.amountInput}
        placeholder="0.00"
        placeholderTextColor={COLORS.textLight}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
    </View>
  );
};

