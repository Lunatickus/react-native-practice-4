import { Image, StyleSheet, Text, View } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} />
        <View style={styles.textWrapper}>
          <Text style={styles.textLogin}>Natali Romanova</Text>
          <Text style={styles.textEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  textLogin: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Light",
    fontSize: 11,
    lineHeight: 13,
  },
});
