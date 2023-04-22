import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "./MealDetail";

const MealItem = ({
  id,
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  function selectMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
      onPress={selectMealHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPress : null)}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail complexity={complexity} duration={duration} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPress: {
    opacity: 0.4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
});
