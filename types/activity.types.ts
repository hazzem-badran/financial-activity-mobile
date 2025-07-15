// Activity related types
export interface Activity {
  id: number;
  userId: string;
  title: string;
  amount: string;
  category: string
  created_at: string;

}

export interface ActivitiesItemProps {
  item: Activity;
  onDelete: (id: string) => void;
}

// Summary data structure
export interface Summary {
  income: string;
  expenses: string;
  balance: string;
}

// Activities API response
export interface ActivitiesResponse {
  activities: Activity[];
}

// Hook return type
export interface UseActivitiesReturn {
  activities: Activity[];
  isLoading: boolean;
  refreshing: boolean;
  summary: Summary;
  loadData: () => Promise<void>;
  deleteActivity: (id: string) => Promise<void>;
  handleDelete: (id: string) => void;
  onRefresh: () => Promise<void>;
  fetchActivities: () => Promise<void>;
  fetchSummary: () => Promise<void>;
}
