import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1f1f1f" },
            headerTintColor: "gold",
            contentStyle: { backgroundColor: "#2e2e2e" },
          }}>
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All categories",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealOverviewScreen}
            // options={({route,navigation}) => {
            //  const catId = route.params.categoryid;
            //  return {
            //   title:catId
            //  }
            //  console.log(navigation);
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
