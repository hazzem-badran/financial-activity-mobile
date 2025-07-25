import { SignOutButton } from "@/components/layout";
import { styles } from "@/styles/layout.styles";
import { COLORS } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Custom Drawer Content
function CustomDrawerContent(props: any) {
  return (
    <View style={styles.sideMenuContainer}>
      {/* Header with Image */}
      <View style={styles.sideMenuHeader}>
        <Image 
          source={require("@/assets/images/carts2.png")} 
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Financial App</Text>
      </View>
      
      <View style={styles.menuItemsContainer}>
        <DrawerItemList {...props} />
        <SignOutButton />
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView  style={styles.flex}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: COLORS.primary,
          drawerInactiveTintColor: COLORS.textLight,
          drawerHideStatusBarOnOpen: true,
          drawerContentStyle: {
            paddingTop: 0, // نزلناها لأن الـ custom content هيتحكم
            backgroundColor: COLORS.background,
          },
          headerShown: true,
          headerTintColor: COLORS.primary,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="create"
          options={{
            drawerLabel: "Create",
            title: "Create",
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="create-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="future-purchases"
          options={{
            drawerLabel: "Future Purchases",
            title: "Future Purchases",
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
