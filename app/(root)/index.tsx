import { styles } from "@/assets/styles/home.styles";
import ActivitiesItem from "@/components/ActivitiesItem";
import BalanceCard from "@/components/BalanceCard";
import NoActivitiesFond from "@/components/NoActivitiesFond";
import PageLoader from "@/components/PageLoader";
import { useActivities } from "@/Hook/useActivities";
import { useUser } from "@clerk/clerk-expo";
import { useFocusEffect, useGlobalSearchParams } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { newActivity } = useGlobalSearchParams();

  const {
    activities,
    isLoading,
    refreshing,
    summary,
    loadData,
    handleDelete,
    onRefresh
  } = useActivities(user?.id || "");

  useFocusEffect(
    useCallback(() => {
      if (user?.id) {
        if (!activities.length || newActivity === 'true') {
          loadData();
        }
      }
    }, [user?.id, newActivity, activities.length])
  );

  if (!user?.id || (isLoading && !refreshing)) {
    return <PageLoader />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require("@/assets/images/carts.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />

            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>

              <Text style={styles.usernameText}>
                
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
