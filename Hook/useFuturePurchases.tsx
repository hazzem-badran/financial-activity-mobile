import { API_URL } from "@/constants/api";
import { Activity } from "@/types";
import { UseFuturePurchasesReturn } from "@/types/futurePurchases.types";
import { CreateActivityForm } from "@/types/hook.types";
import { useState } from "react";
import { Alert } from "react-native";

export const useFuturePurchases = (userId: string | undefined): UseFuturePurchasesReturn => {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    CreateActivityForm["category"] | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const [purchases, setPurchases] = useState<Activity[]>([]);
  const [refreshing, setRefreshing] = useState(false);

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
      Alert.alert("Error", "Failed to create activity");
    } finally {
      setIsLoading(false);

      // Optionally, you can refresh the list of purchases here
      // fetchPurchases();
    }
  };

  const fetchPurchases = async () => {
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
  };

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
    setTitle,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    purchases,
    handleCreate,
    fetchPurchases,
    handleDelete,
    refreshing,
    onRefresh
  };
};

export default useFuturePurchases;
