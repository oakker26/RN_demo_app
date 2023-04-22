import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import Lists from "../components/MealDetail/Lists";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route,navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const headerButtonHandler=()=>{
    console.log("Press!");
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton icon="star" color='white' onPress={headerButtonHandler}/>
      }
    })
  },[navigation])
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
