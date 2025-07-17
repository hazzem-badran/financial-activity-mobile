import { styles } from "@/styles/create.styles";
import { COLORS } from "@/theme/colors";
import { IAmountContainerProps } from "@/types";
import React from "react";
import { Text, TextInput, View } from "react-native";



export const AmountContainer = ({
  amount,
  changeAmount,
}: IAmountContainerProps) => {
  return (
    <View style={styles.amountContainer}>
      <Text style={styles.currencySymbol}>$</Text>
      <TextInput
        style={styles.amountInput}
        placeholder="0.00"
        placeholderTextColor={COLORS.textLight}
        value={amount}
        onChangeText={changeAmount}
        keyboardType="numeric"
      />
    </View>
  );
};

