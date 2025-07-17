import { Category } from '@/constants/categories';
import { TextInputProps } from 'react-native';

// Auth Input component props
export interface IAuthInputProps extends TextInputProps {
  error?: boolean;
}

// Auth Button component props
export interface IAuthButtonProps {
  title: string;
  onPress: () => void | Promise<void>;
  isLoading?: boolean;
}

// Auth Error component props
export interface IAuthErrorProps {
  error: string | null;
  setError: (error: string | null) => void;
}

// Category Selector component props
export interface ICategorySelectorProps {
  selectedCategory: string | undefined;
  onSelectCategory: (category: string) => void;
  categories: Category[];
}

// Activity Type Toggle component props
export interface IActivityTypeToggleProps {
  isExpense: boolean;
  setIsExpense: (isExpense: boolean) => void;
}

export type IActivityTypeOption = {
  label: string;
  icon: 'arrow-down-circle' | 'arrow-up-circle';
  value: boolean;
}

export const ACTIVITY_TYPES: IActivityTypeOption[] = [
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


export interface IInputContainerProps {
  title: string;
  changeTitle: (value: string) => void;
}
export interface IAmountContainerProps {
  amount: string;
  changeAmount: (value: string) => void;
}