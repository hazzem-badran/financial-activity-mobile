import { SignOutButton } from "@/components/SignOutButton";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Custom Drawer Content
function CustomDrawerContent(props: any) {
  return (
    <View style={styles.drawerContainer}>
      {/* Header with Image */}
      <View style={styles.drawerHeader}>
        <Image 
          source={require("@/assets/images/logo.png")} 
          style={styles.drawerImage}
          resizeMode="contain"
        />
        <Text style={styles.drawerTitle}>Financial App</Text>
      </View>
      
      {/* Drawer Items */}
      <View style={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
        
        {/* Sign Out Button */}
        {/* <View style={styles.signOutButton}> */}
          <SignOutButton />
        {/* </View> */}
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            title: "My Home",
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="creare"
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

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  drawerHeader: {
    backgroundColor: COLORS.primary,
    paddingVertical: 45,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  drawerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  drawerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerContent: {
    paddingTop: 0,
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 0,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 5,
  },
});
