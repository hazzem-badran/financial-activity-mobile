import { IActivity } from "./activity.types";
import { ICreateActivityForm } from "./hook.types";

export interface IUseFuturePurchasesReturn {
  title: string;
  handleChangeTitle: (title: string) => void;
  selectedCategory: ICreateActivityForm["category"] | undefined;
  handleChangeSelectedCategory: (category: ICreateActivityForm["category"]) => void;
  isLoading: boolean;
  purchases: IActivity[];
  refreshing: boolean;
  handleCreate: () => Promise<void>;
  fetchPurchases: () => Promise<void>;
  handleDelete: (id: string) => void;
  onRefresh: () => void;
}
