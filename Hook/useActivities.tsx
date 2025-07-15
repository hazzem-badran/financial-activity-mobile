import { API_URL } from "@/constants/api";
import { Activity, Summary, UseActivitiesReturn } from "@/types";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

export const useActivities = (userId: string): UseActivitiesReturn => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [summary, setSummary] = useState<Summary>({
    income: "0",
    expenses: "0",
    balance: "0",
  });

  const fetchActivities = useCallback(async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/activities/${userId}`);
      const result:Activity[] = await response.json();

      setActivities(result);
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/activities/summary/${userId}`);
      const result: Summary = await response.json();

      setSummary(result);
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      await Promise.all([fetchActivities(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [userId, fetchActivities, fetchSummary]);

  const deleteActivity = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/activities/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete activity");
      }

      loadData(); // Refresh data after deletion
      Alert.alert("Success", "Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting activity:", error);
      Alert.alert("Error", "Failed to delete activity");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete Activity",
      "Are you sure you want to delete this activity?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteActivity(id),
        },
      ]
    );
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await loadData();
    } catch (error) {
      console.error("Error refreshing data:", error);
      Alert.alert("Error", "Failed to refresh data");
    } finally {
      setRefreshing(false);
    }
  };

  return {
    activities,
    isLoading,
    refreshing,
    summary,
    loadData,
    deleteActivity,
    handleDelete,
    onRefresh,
    fetchActivities,
    fetchSummary,
  };
};

export default useActivities;
