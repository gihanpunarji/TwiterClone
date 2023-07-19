import { Image, StyleSheet, Text, View } from "react-native";

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.container2}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  container2: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "600",
  },
});

export default Tweet;
