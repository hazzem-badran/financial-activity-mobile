import { TextInputProps } from 'react-native';

// Auth Input component props
export interface AuthInputProps extends TextInputProps {
  error?: boolean;
}

// Auth Button component props
export interface AuthButtonProps {
  title: string;
  onPress: () => void | Promise<void>;
  isLoading?: boolean;
}

// Auth Error component props
export interface AuthErrorProps {
  error: string | null;
  setError: (error: string | null) => void;
}
