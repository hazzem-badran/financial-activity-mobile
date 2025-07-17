import { styles } from "@/styles/create.styles";
import { ActivityTypeToggle } from "@/components/home";
import { AmountContainer, Button, CategorySelector } from "@/components/shared/";
import AmountInput from "@/components/shared/AmountInput";
import { CATEGORIES } from "@/constants/categories";
import { useCreateActivity } from "@/hooks/useCreateActivity";
import { View } from "react-native";

export default function Create() {
  const {
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
  } = useCreateActivity();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Amount CONTAINER */}
        <AmountInput title={title} changeTitle={handleChangeTitle} />

        {/* AMOUNT CONTAINER */}
        <AmountContainer amount={amount} changeAmount={handleChangeAmount} />

        {/* TYPE SELECTOR */}
        <ActivityTypeToggle isExpense={isExpense} setIsExpense={handleChangeExpense} />

        <CategorySelector
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleChangeSelectedCategory}
        />
        <Button title="Save" onPress={handleCreate} isLoading={isLoading} />
      </View>
    </View>
  );
}
