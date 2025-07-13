// Authentication form interfaces
export interface SignInFormData {
  emailAddress: string;
  password: string;
}

export interface VerifyEmailProps {
  code: string;
  setCode: (code: string) => void;
  onVerifyPress: () => Promise<void>;
  error: string | null;
  setError: (error: string | null) => void;
  isLoading?: boolean;
}

// Validation interfaces
export interface ValidationResult {
  isValid: boolean;
  errors: {
    email?: string;
    password?: string;
  };
}

// Auth hook return types
export interface UseSignInFormReturn {
  emailAddress: string;
  setEmailAddress: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  onSignInPress: () => Promise<void>;
  isLoading: boolean;
}

export interface UseSignUpFormReturn {
  emailAddress: string;
  setEmailAddress: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  code: string;
  setCode: (code: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  onSignUpPress: () => Promise<void>;
  onVerifyPress: () => Promise<void>;
  pendingVerification: boolean;
  isLoading: boolean;
}
