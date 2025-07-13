import { UseSignInFormReturn } from "@/types";
import { validateForm } from "@/utils/validation";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";

export const useSignInForm = (): UseSignInFormReturn => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    setIsLoading(true);
    // Clear previous errors
    setError(null);

    // Validate input fields using our validation function
    const validation = validateForm(emailAddress, password);
    if (!validation.isValid) {
      setError(validation.message!);
      setIsLoading(false); // Ensure loading state is reset
      return;
    }

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // Handle Clerk authentication errors
      console.error("Sign-in error:", JSON.stringify(err, null, 2));

      if (err?.errors && err.errors.length > 0) {
        const errorCode = err.errors[0].code;
        const errorMessage = err.errors[0].message;

        switch (errorCode) {
          case "form_password_incorrect":
          case "form_identifier_not_found":
            setError(
              "Invalid email or password. Please check your credentials."
            );
            break;
          case "form_password_pwned":
            setError(
              "This password has been compromised. Please use a different password."
            );
            break;
          case "form_identifier_exists":
            setError("An account with this email already exists.");
            break;
          default:
            setError(errorMessage || "Sign-in failed. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    error,
    setError,
    onSignInPress,
    isLoading,
  };
};

export default useSignInForm;
