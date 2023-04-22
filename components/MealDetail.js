import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const MealDetail = ({
  
  duration,
  complexity,
  affordability,
  style,
  textStyle
}) => {
  return (
    <View style={[styles.detail,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration} m</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    justifyContent: "space-evenly",
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12,
    fontWeight:600
  },
});
