import { Category } from '@/constants/categories';
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

// Category Selector component props
export interface CategorySelectorProps {
  selectedCategory: string | undefined;
  onSelectCategory: (category: string) => void;
  categories: Category[];
}

// Activity Type Toggle component props
export interface ActivityTypeToggleProps {
  isExpense: boolean;
  setIsExpense: (isExpense: boolean) => void;
}

export type ActivityTypeOption = {
  label: string;
  icon: 'arrow-down-circle' | 'arrow-up-circle';
  value: boolean;
}

export const ACTIVITY_TYPES: ActivityTypeOption[] = [
  {
    label: 'Expense',
    icon: 'arrow-down-circle',
    value: true
  },
  {
    label: 'Income',
    icon: 'arrow-up-circle',
    value: false
  }
];


export interface InputContainerProps {
  title: string;
  setTitle: (value: string) => void;
}
export interface AmountContainerProps {
  amount: string;
  setAmount: (value: string) => void;
}