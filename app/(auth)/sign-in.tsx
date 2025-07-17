import { styles } from "@/styles/auth.styles";
import { MessageError } from "@/components/auth";
import { Button, InputField } from "@/components/shared";
import { useSignInForm } from "@/hooks/useSignInForm";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Page() {
  const {
    emailAddress,
    handleChangeEmail,
    password,
    handleChangePassword,
    error,
    setError,
    onSignInPress,
    isLoading,
  } = useSignInForm();

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/auth1.png")}
          style={styles.illustration}
        />

        <Text style={styles.title}>Welcome Back</Text>

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
          onPress={onSignInPress}
          isLoading={isLoading}
        />

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don&apos;t have an account?</Text>
          <Link href="/sign-up" asChild>
            <Text style={styles.linkText}>Sign up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
