import { styles } from "@/styles/create.styles";
import { COLORS } from "@/theme/colors";
import { IInputContainerProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";

// Using React.ForwardRefRenderFunction to make ref optional
const AmountInput: React.ForwardRefRenderFunction<TextInput, IInputContainerProps> =
  ({ title, changeTitle }, ref) => {
    return (
      <View style={styles.inputContainer}>
        <Ionicons
          name="create-outline"
          size={22}
          color={COLORS.textLight}
          style={styles.inputIcon}
        />
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder="Activity Title"
          placeholderTextColor={COLORS.textLight}
          value={title}
          onChangeText={changeTitle}
        />
      </View>
    );
  };

// Forward ref with displayName
export default forwardRef(AmountInput);
