import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { styles } from "@/assets/styles/create.styles";
import { InputContainerProps } from "@/types";



const InputContainer = ({ title, setTitle }: InputContainerProps) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name="create-outline"
        size={22}
        color={COLORS.textLight}
        style={styles.inputIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Title"
        placeholderTextColor={COLORS.textLight}
        value={title}
        onChangeText={setTitle}
      />
    </View>
  );
};

export default InputContainer;
