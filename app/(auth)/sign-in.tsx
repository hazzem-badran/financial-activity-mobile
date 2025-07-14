import { styles } from "@/assets/styles/auth.styles";
import AuthError from "@/components/AuthError";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignInForm } from "@/Hook/useSignInForm";
import AuthButton from "@/components/AuthButton";
import AuthInput from "@/components/AuthInput";

export default function Page() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    error,
    setError,
    onSignInPress,
    isLoading,
  } = useSignInForm();

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
          source={require("@/assets/images/auth1.png")}
          style={styles.illustration}
        />

        <Text style={styles.title}>Welcome Back</Text>

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
          onPress={onSignInPress}
          isLoading={isLoading}
        />

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Link href="/sign-up" asChild>
            <Text style={styles.linkText}>Sign up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
