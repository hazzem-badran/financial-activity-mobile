import { styles } from "@/assets/styles/create.styles";
import { styles as stylesHome } from "@/assets/styles/home.styles";
import ActivitiesItem from "@/components/ActivitiesItem";
import AuthButton from "@/components/AuthButton";
import CategorySelector from "@/components/CategorySelector";
import InputContainer from "@/components/InputContainer";
import NoPlannedPurchases from "@/components/NoPlannedPurchases";
import { CATEGORIES_EXPENSE } from "@/constants/categories";
import { useFuturePurchases } from "@/Hook/useFuturePurchases";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useRef } from "react";
import { FlatList, RefreshControl, TextInput, View } from "react-native";

export default function FuturePurchases() {
  const { user } = useUser();
  const inputRef = useRef<TextInput>(null);

  
  const {
    title,
    setTitle,
    selectedCategory,
    setSelectedCategory,
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
  }, [user?.id]);


  const focusInput = () => {
    inputRef.current?.focus();
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* INPUT CONTAINER */}
        <InputContainer ref={inputRef} title={title} setTitle={setTitle} />

        <CategorySelector
          categories={CATEGORIES_EXPENSE}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <AuthButton title="Save" onPress={handleCreate} isLoading={isLoading} />
      </View>

      <FlatList
        style={stylesHome.transactionsList}
        data={purchases}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <ActivitiesItem
            item={item}
            onDelete={() => handleDelete(item.id.toString())}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoPlannedPurchases focusInput={focusInput} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
