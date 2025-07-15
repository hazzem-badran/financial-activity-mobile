import { styles } from "@/assets/styles/create.styles";
import ActivityTypeToggle from "@/components/ActivityTypeToggle";
import AmountContainer from "@/components/AmountContainer";
import AuthButton from "@/components/AuthButton";
import CategorySelector from "@/components/CategorySelector";
import InputContainer from "@/components/InputContainer";
import { CATEGORIES } from "@/constants/categories";
import { COLORS } from "@/constants/colors";
import { useCreateActivity } from "@/Hook/useCreateActivity";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Create() {
  const {
    title,
    setTitle,
    amount,
    setAmount,
    selectedCategory,
    setSelectedCategory,
    isExpense,
    setIsExpense,
    isLoading,
    handleCreate,
  } = useCreateActivity();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* INPUT CONTAINER */}
        <InputContainer title={title} setTitle={setTitle} />

        {/* AMOUNT CONTAINER */}
        <AmountContainer amount={amount} setAmount={setAmount} />

        {/* TYPE SELECTOR */}
        <ActivityTypeToggle isExpense={isExpense} setIsExpense={setIsExpense} />

        

        <CategorySelector
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <AuthButton title="Save" onPress={handleCreate} isLoading={isLoading} />
      </View>
    </View>
  );
}
