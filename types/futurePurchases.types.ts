import { Activity } from "./activity.types";
import { CreateActivityForm } from "./hook.types";

export interface UseFuturePurchasesReturn {
  title: string;
  setTitle: (title: string) => void;
  selectedCategory: CreateActivityForm["category"] | undefined;
  setSelectedCategory: (category: CreateActivityForm["category"]) => void;
  isLoading: boolean;
  purchases: Activity[];
  refreshing: boolean;
  handleCreate: () => Promise<void>;
  fetchPurchases: () => Promise<void>;
  handleDelete: (id: string) => void;
  onRefresh: () => void;
}
