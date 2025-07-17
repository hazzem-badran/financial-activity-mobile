import { COLORS } from "@/app/theme/colors";
import { styles } from "@/styles/layout.styles";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SaveScreenProps {
  children?: React.ReactNode;
}

export const SaveScreen = ({ children }: SaveScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={styles.saveScreen}
    >
      {children}
    </View>
  );
};



