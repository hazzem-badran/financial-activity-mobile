import { COLORS } from "@/constants/colors";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SaveScreenProps {
  children?: React.ReactNode;
}

const SaveScreen = ({ children }: SaveScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default SaveScreen;
