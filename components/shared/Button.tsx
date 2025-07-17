import { styles } from "@/styles/auth.styles";
import { IAuthButtonProps } from "@/types";
import React, { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";


export const Button = ({
  title,
  onPress,
  isLoading,
}: IAuthButtonProps) => {
  // Pulse animation for loading state
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Animate when loading
  useEffect(() => {
    if (isLoading) {
      // Start pulse animation
      const pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.9,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ],),
      );
      pulseAnimation.start();
      
      return () => pulseAnimation.stop();
    } else {
      // Reset scale when not loading
      pulseAnim.setValue(1);
    }
  }, [isLoading, pulseAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
      <TouchableOpacity
        style={[
          styles.button,
          isLoading && { opacity: 0.7 }
        ]}
        onPress={onPress}
        disabled={isLoading}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Loading..." : title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

