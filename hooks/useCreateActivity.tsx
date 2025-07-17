import { API_URL } from "@/constants/api";
import {
  ICreateActivityForm,
  IUseCreateActivityReturn,
} from "@/types/createActivity.types";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useCreateActivity = (): IUseCreateActivityReturn => {
  const router = useRouter();
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ICreateActivityForm["category"] | undefined
  >(undefined);
  const [isExpense, setIsExpense] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleChangeAmount = (newAmount: string) => {
    setAmount(newAmount);
  };

  const handleChangeSelectedCategory = (category: ICreateActivityForm["category"]) => {
    setSelectedCategory(category);
  };

  const handleChangeExpense = (expense: boolean) => {
    setIsExpense(expense);
  };
  
  const handleCreate = async () => {
    //validations
    if (!title.trim())
      return Alert.alert("Error", "Please enter an activity title");
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) < 0) {
      Alert.alert("Error", "Please enter a vaild amount");
      return;
    }
    if (!selectedCategory)
      return Alert.alert("Error", "Please select a category");

    setIsLoading(true);
    try {
      const formattedAmount = isExpense
        ? -Math.abs(parseFloat(amount))
        : Math.abs(parseFloat(amount));

      const response = await fetch(`${API_URL}/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?.id,
          title,
          amount: formattedAmount,
          category: selectedCategory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create activity");
      }
      setTitle("");
      setAmount("");
      setSelectedCategory(undefined);
      setIsExpense(true);
      Alert.alert("Success", "Activity created successfully");
      router.push({
        pathname: "/",
        params: { newActivity: "true" },
      });
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to create activity"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    title,
    handleChangeTitle,
    amount,
    handleChangeAmount,
    selectedCategory,
    handleChangeSelectedCategory,
    isExpense,
    handleChangeExpense,
    isLoading,
    handleCreate,
  };
};
