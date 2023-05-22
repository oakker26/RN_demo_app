import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";
const MealOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryid;
  // console.log(catId);
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
    // console.log(mealItem.categoryIds.indexOf(catId));
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // console.log(categoryTitle);
  return <MealList items={displayMeals } />
};

export default MealOverviewScreen;


