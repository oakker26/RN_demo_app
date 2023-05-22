import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  function renderMealItem(itemData) {
    const items = itemData.item;
    const mealItemProps = {
      id: items.id,
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
