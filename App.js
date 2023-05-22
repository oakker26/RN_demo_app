import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import {store} from "./store/redux/store"
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1f1f1f" },
        headerTintColor: "gold",
        sceneContainerStyle: { backgroundColor: "#2e2e2e" },
        drawerContentStyle: { backgroundColor: "#1f1f1f" },
        drawerActiveBackgroundColor: "#2e2e2e",
        drawerActiveTintColor: "gold",
        drawerInactiveTintColor: "white",
      }}>
      <Drawer.Screen
        component={CategoriesScreen}
        name="Categories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        component={FavoritesScreen}
        name="Favorites"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#1f1f1f" },
              headerTintColor: "gold",
              contentStyle: { backgroundColor: "#2e2e2e" },
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverView" component={MealOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// options={({route,navigation}) => {
//  const catId = route.params.categoryid;
//  return {
//   title:catId
//  }
//  console.log(navigation);
// }}
