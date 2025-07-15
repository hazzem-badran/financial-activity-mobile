import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/create.styles";
import { COLORS } from "@/constants/colors";
import { AmountContainerProps } from "@/types";



const AmountContainer = ({
  amount,
  setAmount,
}: AmountContainerProps) => {
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

export default AmountContainer;
