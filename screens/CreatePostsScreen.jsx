import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CreatePostScreenTrashButton } from "../components/CreatePostScreenTrashButton";
import { TextInput } from "react-native-gesture-handler";
import { MapPointIcon } from "../components/MapPointIcon";
import { useState } from "react";
import { Container } from "../components/Container";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const disabled = !name || !location;

  return (
    <Container>
      <View style={styles.container}>
        <Image style={styles.loadImage} />
        <Text style={styles.loadImageText}>Завантажте фото</Text>
        <KeyboardAvoidingView
          style={{ width: "100%", marginBottom: 32 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <TextInput
            style={styles.nameInput}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={setName}
          />
          <View style={{ width: "100%" }}>
            <TextInput
              style={styles.locationInput}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              value={location}
              onChangeText={setLocation}
            />
            <MapPointIcon />
          </View>
        </KeyboardAvoidingView>
        <Pressable
          style={disabled ? styles.disabledPublishButton : styles.publishButton}
          disabled={disabled}
        >
          <Text
            style={
              disabled
                ? styles.disabledPublishButtonText
                : styles.publishButtonText
            }
          >
            Опубліковати
          </Text>
        </Pressable>
        <CreatePostScreenTrashButton />
      </View>
      </Container>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  loadImage: {
    width: "100%",
    height: 240,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
  },
  loadImageText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
    alignSelf: "flex-start",
  },
  nameInput: {
    width: "100%",
    height: 50,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  locationInput: {
    width: "100%",
    height: 50,
    color: "#212121",
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 28,
  },
  publishButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  publishButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  disabledPublishButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  disabledPublishButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
