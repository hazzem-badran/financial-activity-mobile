import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Alert, FlatList, Image, RefreshControl, Text, View } from "react-native";
import { styles } from "@/assets/styles/home.styles";
import BalanceCard from "@/components/BalanceCard";
import { useActivities } from "@/Hook/useActivities";
import ActivitiesItem from "@/components/ActivitiesItem";
import { use, useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import NoActivitiesFond from "@/components/NoActivitiesFond";

export default function Page() {
  const { user } = useUser();
  const [refreshing, setRefreshing] = useState(false);

  const {
    activities,
    isLoading,
    summary,
    deleteActivity,
    loadData,
  } = useActivities(user?.id || "");

  useEffect(() => {
    if (user?.id) {
      loadData();
    }
  }, [user?.id, loadData]);

  if (!user?.id || (isLoading && !refreshing)) {
    return <PageLoader />;
  }

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

  // console.log("userId:", user?.id);
  // console.log("activities:", activities);
  // console.log("summary:", summary);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />

            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>

              <Text style={styles.usernameText}>
                Hello{" "}
                {user?.firstName ||
                  user?.username ||
                  user?.emailAddresses[0]?.emailAddress.split("@")[0] ||
                  "Guest"}
              </Text>
            </View>
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      <FlatList
        style={styles.transactionsList}
        data={activities}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <ActivitiesItem item={item} onDelete={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoActivitiesFond/>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}
