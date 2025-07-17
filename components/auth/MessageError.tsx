import { COLORS } from "@/theme/colors";
import { styles } from "@/styles/auth.styles";
import { IAuthErrorProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

export const MessageError = ({ error, setError }: IAuthErrorProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-20)).current;

  // Animate in when component mounts
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  // Handle close with animation
  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -20,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setError(null); // Clear error after animation completes
    });
  };

  return (
    <Animated.View 
      style={[
        styles.errorBox,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }
      ]}
    >
      <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity onPress={handleClose}>
        <Ionicons name="close" size={20} color={COLORS.text} />
      </TouchableOpacity>
    </Animated.View>
  );
};


