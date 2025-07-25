import { Category } from "@/constants/categories";

export interface ICreateActivityForm {
  title: string;
  amount: string;
  category: Category['name'];
  isExpense?: boolean;
}

export interface IUseCreateActivityReturn {
  title: string;
  setTitle: (title: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  selectedCategory: string | undefined;
  setSelectedCategory: (category: string) => void;
  isExpense: boolean;
  setIsExpense: (isExpense: boolean) => void;
  isLoading: boolean;
  handleCreate: () => Promise<void>;
}
