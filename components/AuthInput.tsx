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
        // استخدام spread operator بدلاً من كتابة كل prop منفرد - أكثر احترافية وأقل تكراراً
      />
    </Animated.View>
  );
};

export default AuthInput;

/*

const AuthInput = ({ value, placeholder, onChangeText, error, secureTextEntry }: AuthInputProps) => {
  return (
    <TextInput
      style={[styles.input, error && styles.errorInput]}
      autoCapitalize="none"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};
*/