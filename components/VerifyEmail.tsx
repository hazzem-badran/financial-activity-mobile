import { styles } from "@/assets/styles/auth.styles";
import { VerifyEmailProps } from "@/types";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import AuthButton from "./AuthButton";
import AuthError from "./AuthError";
import AuthInput from "./AuthInput";

const VerifyEmail = ({
  code,
  setCode,
  onVerifyPress,
  error,
  setError,
  isLoading,
}: VerifyEmailProps) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/auth3.png")}
          style={styles.illustration}
        />
        <Text style={styles.title}>Verify your email</Text>
        <Text
          style={[styles.footerText, { marginBottom: 20, textAlign: "center" }]}
        >
          We've sent a verification code to your email address. Please enter it
          below to continue.
        </Text>
        {error && <AuthError error={error} setError={setError} />}

        <AuthInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
        />

        <AuthButton
          title="Verify"
          onPress={onVerifyPress}
          isLoading={isLoading}
        />
      </View>
    </ScrollView>
  );
};

export default VerifyEmail;
