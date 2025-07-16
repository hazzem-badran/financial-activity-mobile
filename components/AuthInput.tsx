import { styles } from "@/assets/styles/auth.styles";
import { AuthInputProps } from "@/types";
import React, { useEffect, useRef } from "react";
import { Animated, TextInput } from "react-native";

const AuthInput = ({ error, ...props }: AuthInputProps) => {
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
    <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
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

export default AuthInput;