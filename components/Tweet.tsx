import { Image, StyleSheet, Text, View } from "react-native";
import { TweetType } from "../types/tweetTypes";
import { Entypo, EvilIcons } from "@expo/vector-icons";

type TweetProps = {
  tweet: TweetType;
};

type IconType = {
  name: String;
  text?: String | number;
};

const FooterIcon = ({ name, text }: IconType) => {
  return (
    <View style={styles.iconView}>
      <EvilIcons name={name} size={20} color="gray" />
      <Text style={{ color: "gray", fontSize: 13 }}>{text}</Text>
    </View>
  );
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.container2}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} ・ 2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.image} />}
        <View style={styles.footer}>
          <FooterIcon name="comment" text={tweet.numberOfComments} />
          <FooterIcon name="retweet" text={tweet.numberOfRetweets} />
          <FooterIcon name="heart" text={tweet.numberOfLikes} />
          <FooterIcon name="chart" text={tweet.impressions} />
          <FooterIcon name="share-apple" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  username: {
    color: "gray",
    marginLeft: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 12,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Tweet;
