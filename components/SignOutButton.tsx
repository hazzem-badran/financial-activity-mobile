import { COLORS } from "@/constants/colors";
import { useClerk } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Navigate to auth after successful sign out
      router.replace("/(auth)/sign-in");
      console.log("Sign out successful");
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("Sign out error:", JSON.stringify(err, null, 2));
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={24} color={"red"} />
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    flexDirection: "row",
    // alignItems: "flex-start",
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 5,
    gap: 10,
    
  },
  text: {
    fontSize: 16,
    color: COLORS.textLight,
    fontWeight: "500",
  },
});
