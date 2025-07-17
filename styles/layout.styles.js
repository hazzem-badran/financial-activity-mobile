import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  // Drawer Styles
  sideMenuContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  sideMenuHeader: {
    backgroundColor: COLORS.primary,
    paddingVertical: 65,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerLogo: {
    width: 40,
    height: 40,
    // borderRadius: 40,
    marginBottom: 10,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  menuContent: {
    paddingTop: 0,
  },
  menuItemsContainer: {
    flex: 1,
    paddingTop: 0,
  },
  signOutButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 5,
  },
  saveScreen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
