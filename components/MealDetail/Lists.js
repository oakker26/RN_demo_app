import { StyleSheet, Text, View } from "react-native";

const Lists = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default Lists;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    paddingHorizontal:12,
    paddingVertical: 5,
    marginVertical: 6,
    marginHorizontal: 5,
    backgroundColor: "gold",
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
