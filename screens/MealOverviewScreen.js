import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
const MealOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryid;
  // console.log(catId);
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
    // console.log(mealItem.categoryIds.indexOf(catId));
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  },[catId,navigation])
  
  // console.log(categoryTitle);

  function renderMealItem(itemData) {
    const items = itemData.item;
    const mealItemProps = {
      id:items.id,
      title: items.title,
      imageUrl: items.imageUrl,
      duration: items.duration,
      complexity: items.complexity,
      affordability: items.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
