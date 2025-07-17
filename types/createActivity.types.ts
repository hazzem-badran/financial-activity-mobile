import { Category } from "@/constants/categories";

export interface ICreateActivityForm {
  title: string;
  amount: string;
  category: Category['name'];
  isExpense: boolean;
}

export interface IUseCreateActivityReturn {
  title: string;
  handleChangeTitle: (title: string) => void;
  amount: string;
  handleChangeAmount: (amount: string) => void;
  selectedCategory: string | undefined;
  handleChangeSelectedCategory: (category: string) => void;
  isExpense: boolean;
  handleChangeExpense: (isExpense: boolean) => void;
  isLoading: boolean;
  handleCreate: () => Promise<void>;
}
