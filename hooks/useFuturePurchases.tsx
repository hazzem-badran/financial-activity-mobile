import { API_URL } from "@/constants/api";
import { IActivity, ICreateActivityForm, IUseFuturePurchasesReturn } from "@/types";

import { useCallback, useState } from "react";
import { Alert } from "react-native";

export const useFuturePurchases = (userId: string | undefined): IUseFuturePurchasesReturn => {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ICreateActivityForm["category"] | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const [purchases, setPurchases] = useState<IActivity[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleChangeSelectedCategory = (category: ICreateActivityForm["category"]) => {
    setSelectedCategory(category);
  };  


  const handleCreate = async () => {
    setIsLoading(true);
    if (!title.trim()) {
      setIsLoading(false);
      return Alert.alert("Error", "Please enter an activity title");
    }

    if (!selectedCategory) {
      setIsLoading(false);
      return Alert.alert("Error", "Please select a category");
    }
    setIsLoading(false);
    Alert.alert("Success", "Activity created successfully");

    try {
      const response = await fetch(`${API_URL}/future-purchases`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category: selectedCategory,
          user_id: userId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create activity");
      }

      setTitle("");
      setSelectedCategory(undefined);
      fetchPurchases();
    } catch (error) {
      console.log(error)
      Alert.alert("Error", "Failed to create activity");
    } finally {
      setIsLoading(false);

      // Optionally, you can refresh the list of purchases here
      // fetchPurchases();
    }
  };

  const fetchPurchases = useCallback(async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/future-purchases/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch purchases");
      }
      const result = await response.json();
      setPurchases(result);
    } catch (error) {
      console.error("Error fetching purchases:", error);
    } finally {
      setIsLoading(false);
    }
  },[userId]);

  const deletePurchase = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/future-purchases/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete purchase");
      }
    } catch (error) {
      console.error("Error deleting purchase:", error);
      Alert.alert("Error", "Failed to delete activity");
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = (id: string) => {
    Alert.alert("Delete", "Are you sure you want to delete this activity?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          setPurchases((prev) =>
            prev.filter((item) => item.id.toString() !== id)
          );
          Alert.alert("Success", "Activity deleted successfully");
          deletePurchase(id);
        },
      },
    ]);
  };

  const onRefresh = () => {
      setRefreshing(true);
      fetchPurchases().finally(() => setRefreshing(false));
    };
  
  return {
    title,
    handleChangeTitle,
    selectedCategory,
    handleChangeSelectedCategory,
    isLoading,
    purchases,
    handleCreate,
    fetchPurchases,
    handleDelete,
    refreshing,
    onRefresh
  };
};

