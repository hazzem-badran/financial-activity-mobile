import { styles } from "@/assets/styles/create.styles";
import { COLORS } from "@/constants/colors";
import { InputContainerProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";

// Using React.ForwardRefRenderFunction to make ref optional
const InputContainer: React.ForwardRefRenderFunction<TextInput, InputContainerProps> = 
  ({ title, setTitle }, ref) => {
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
          onChangeText={setTitle}
        />
      </View>
    );
  };

// Forward ref with displayName
export default forwardRef(InputContainer);
