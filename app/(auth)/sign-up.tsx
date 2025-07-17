import { styles } from "@/styles/auth.styles";
import { MessageError,VerifyEmail } from "@/components/auth";
import { Button, InputField } from "@/components/shared";
import { useSignUpForm } from "@/hooks/useSignUpForm";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function SignUpScreen() {
  const {
    emailAddress,
    handleChangeEmail,
    password,
    handleChangePassword,
    pendingVerification,
    code,
    setCode,
    error,
    setError,
    onSignUpPress,
    onVerifyPress,
    isLoading,
  } = useSignUpForm();

  if (pendingVerification) {
    return (
      <VerifyEmail
        code={code}
        setCode={setCode}
        onVerifyPress={onVerifyPress}
        error={error}
        setError={setError}
        isLoading={isLoading}
      />
    );
  }

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/auth2.png")}
          style={styles.illustration}
        />

        <Text style={styles.title}>Create Account</Text>
        {error && <MessageError error={error} setError={setError} />}
        <InputField
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={handleChangeEmail}
        />

        <InputField
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={handleChangePassword}
        />

        <Button
          title="Continue"
          onPress={onSignUpPress}
          isLoading={isLoading}
        />

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Link href="/(auth)/sign-in" asChild>
            <Text style={styles.linkText}>Sign in</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
