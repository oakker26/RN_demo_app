import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGridTile from "../components/CatagoryGridTile";
 
const CategoriesScreen = ({ navigation }) => {
 const renderCategoryItem = (itemData) => {
   function pressHandler() {
    navigation.navigate('MealsOverView',{
      categoryid:itemData.item.id,
    });
   }
   return (
     <CatagoryGridTile
       title={itemData.item.title}
       onPress={pressHandler}
       color={itemData.item.color}
     />
   );
 };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
