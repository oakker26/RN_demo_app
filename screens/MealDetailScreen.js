import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import Lists from "../components/MealDetail/Lists";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite ,removeFavorite} from "../store/redux/favorites";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
const MealDetailScreen = ({ route, navigation }) => {
  // const favMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFav = favoriteMealIds.includes(mealId);
  const changeFavHandler = () => {
    if (mealIsFav) {
      dispatch(removeFavorite({id:mealId}));
    } else {
      dispatch(addFavorite({id:mealId}))
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="gold"
            onPress={changeFavHandler}
          />
        );
      },
    });
  }, [navigation, changeFavHandler]);
  return (
    <ScrollView style={styles.root}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}> {selectedMeal.title} </Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <Lists data={selectedMeal.ingredients} />
            <SubTitle>Step</SubTitle>
            <Lists data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: { marginBottom: 20 },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "gold",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
