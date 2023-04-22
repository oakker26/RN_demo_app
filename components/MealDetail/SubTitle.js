import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default SubTitle
const styles = StyleSheet.create({
  subtitle: {
    color: "gold",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "gold",
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginVertical: 8,
  },
});