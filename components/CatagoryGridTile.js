import {
  Pressable,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

const CatagoryGridTile = ({ title, color,onPress }) => {
  
  return (
    <>
    
      <View style={[styles.gridItem]}>
        <Pressable
          android_ripple={{ color: "#cccccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPress : null,
          ]}
          onPress={onPress}>
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default CatagoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 18,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    borderRadius:10,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPress: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
