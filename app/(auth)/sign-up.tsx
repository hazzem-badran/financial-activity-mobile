import { styles } from "@/assets/styles/auth.styles";
import AuthError from "@/components/AuthError";
import VerifyEmail from "@/components/VerifyEmail";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUpForm } from "@/Hook/useSignUpForm";
import AuthButton from "@/components/AuthButton";
import AuthInput from "@/components/AuthInput";

export default function SignUpScreen() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
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
          source={require("@/assets/images/revenue-i2.png")}
          style={styles.illustration}
        />

        <Text style={styles.title}>Create Account</Text>
        {error && <AuthError error={error} setError={setError} />}
        <AuthInput
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={setEmailAddress}
        />

        <AuthInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <AuthButton
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
