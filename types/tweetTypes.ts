export type User = {
  id: String;
  username: String;
  image?: String;
  name: String;
};

export type TweetType = {
  id: String,
  user: User;
  content: String;
  createdAt: String;
  image?: String;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};