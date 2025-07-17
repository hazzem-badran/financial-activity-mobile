import { styles } from "@/styles/create.styles";
import { styles as stylesHome } from "@/styles/home.styles";
import { NoPlannedPurchases } from "@/components/purchases";
import { ActivitiesItem, Button, CategorySelector } from "@/components/shared";
import AmountInput from "@/components/shared/AmountInput";
import { CATEGORIES_EXPENSE } from "@/constants/categories";
import { useFuturePurchases } from "@/hooks";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useRef } from "react";
import { FlatList, RefreshControl, TextInput, View } from "react-native";

export default function FuturePurchases() {
  const { user } = useUser();
  const inputRef = useRef<TextInput>(null);

  
  const {
    title,
    handleChangeTitle,
    selectedCategory,
    handleChangeSelectedCategory,
    isLoading,
    handleCreate,
    purchases,
    fetchPurchases,
    handleDelete,
    refreshing,
    onRefresh,
  } = useFuturePurchases(user?.id);


  useEffect(() => {
    fetchPurchases();
  }, [user?.id, fetchPurchases]);


  const focusInput = () => {
    inputRef.current?.focus();
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Amount CONTAINER */}
        <AmountInput ref={inputRef} title={title} changeTitle={handleChangeTitle} />

        <CategorySelector
          categories={CATEGORIES_EXPENSE}
          selectedCategory={selectedCategory}
          onSelectCategory={handleChangeSelectedCategory}
        />
        <Button title="Save" onPress={handleCreate} isLoading={isLoading} />
      </View>

      <FlatList
        style={stylesHome.activitiesList}
        data={purchases}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <ActivitiesItem
            item={item}
            onDelete={() => handleDelete(item.id.toString())}
            showPrice={true}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoPlannedPurchases focusInput={focusInput} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
        }
      />
    </View>
  );
}
