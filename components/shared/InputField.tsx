import { styles } from "@/styles/auth.styles";
import { IAuthInputProps } from "@/types";
import React, { useEffect, useRef } from "react";
import { Animated, TextInput } from "react-native";

export const InputField = ({ error, ...props }: IAuthInputProps) => {
  // Shake animation for error
  const shakeAnim = useRef(new Animated.Value(0)).current;

  // Trigger shake animation when error appears
  useEffect(() => {
    if (error) {
      // Shake animation
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
    }
  }, [error]);

  return (
    <Animated.View style={[
      styles.animatedView,
      { transform: [{ translateX: shakeAnim }] }
    ]}>
      <TextInput
        style={[
          styles.input,
          error && styles.errorInput, 
        ]}
        autoCapitalize="none" 
        {...props} 
      />
    </Animated.View>
  );
};
