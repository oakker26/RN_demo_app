import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const FavoriteMealsCtx = useContext(FavoritesContext);
  const FavoriteMealId = useSelector(state => state.favoriteMeals.ids);
  const FavoriteMeals = MEALS.filter((meal) =>
    FavoriteMealId.includes(meal.id)
  );
  if (FavoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No FavoriteMeal</Text>
      </View>
    );
  }
  return <MealList items={FavoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
     rootContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems:"center"
     },
     text: {
          fontSize: 20,
          fontWeight: 600,
          color:"gold"
     }
});
