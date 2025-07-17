// Activity related types
export interface IActivity {
  id: number;
  userId: string;
  title: string;
  amount?: string;
  category: string
  created_at: string;

}

export interface IActivitiesItemProps {
  item: IActivity;
  onDelete: (id: string) => void;
  showPrice?: boolean;
}

// Summary data structure
export interface ISummary {
  income: string;
  expenses: string;
  balance: string;
}

// Activities API response
export interface IActivitiesResponse {
  activities: IActivity[];
}

// Hook return type
export interface IUseActivitiesReturn {
  activities: IActivity[];
  isLoading: boolean;
  refreshing: boolean;
  summary: ISummary;
  loadData: () => Promise<void>;
  deleteActivity: (id: string) => Promise<void>;
  handleDelete: (id: string) => void;
  onRefresh: () => Promise<void>;
  fetchActivities: () => Promise<void>;
  fetchSummary: () => Promise<void>;
}
