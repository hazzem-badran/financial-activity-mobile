import { styles } from "@/styles/auth.styles";
import { IVerifyEmailProps } from "@/types/auth.types";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button, InputField } from "../shared";
import { MessageError } from "./MessageError";

export const VerifyEmail = ({
  code,
  setCode,
  onVerifyPress,
  error,
  setError,
  isLoading,
}: IVerifyEmailProps) => {
  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.contentContainer}
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
          We&apos;ve sent a verification code to your email address. Please
          enter it below to continue.
        </Text>
        {error && <MessageError error={error} setError={setError} />}

        <InputField
          value={code}
          placeholder="Enter your verification code"
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
        />

        <Button title="Verify" onPress={onVerifyPress} isLoading={isLoading} />
      </View>
    </ScrollView>
  );
};
