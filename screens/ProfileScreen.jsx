import { Image, StyleSheet, Text, View } from "react-native";
import { Container } from "../components/Container";
import { Background } from "../components/Background";
import { ImageButton } from "../components/ImageButton";
import { LogOutButton } from "../components/LogOutButton";

const ProfileScreen = () => {
  return (
    <Container>
      <Background>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image />
            <ImageButton style={styles.imageButton} />
          </View>
          <LogOutButton styles={{ alignSelf: "flex-end", marginBottom: 46 }} />
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
      </Background>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
    alignItems: "center",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -12,
    top: 81,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
  },
});
