import { StyleSheet, Text, View } from "react-native";
import tweets from "../../assets/data/tweets";

export default function TabOneScreen() {
  const tweet = tweets[0];

  return (
    <View style={styles.container}>
      <Text>{tweet.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
