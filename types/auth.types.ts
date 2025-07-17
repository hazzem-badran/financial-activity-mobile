// Authentication form interfaces
export interface ISignInFormData {
  emailAddress: string;
  password: string;
}

export interface IVerifyEmailProps {
  code: string;
  setCode: (code: string) => void;
  onVerifyPress: () => Promise<void>;
  error: string | null;
  setError: (error: string | null) => void;
  isLoading?: boolean;
}

// Validation interfaces
export interface IValidationResult {
  isValid: boolean;
  errors: {
    email?: string;
    password?: string;
  };
}

// Auth hook return types
export interface IUseSignInFormReturn {
  emailAddress: string;
  handleChangeEmail: (email: string) => void;
  password: string;
  handleChangePassword: (password: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  onSignInPress: () => Promise<void>;
  isLoading: boolean;
}

export interface IUseSignUpFormReturn {
  emailAddress: string;
  handleChangeEmail: (email: string) => void;
  password: string;
  handleChangePassword: (password: string) => void;
  code: string;
  setCode: (code: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  onSignUpPress: () => Promise<void>;
  onVerifyPress: () => Promise<void>;
  pendingVerification: boolean;
  isLoading: boolean;
}
