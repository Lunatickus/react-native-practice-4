import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Background } from "./Background";
import { useState } from "react";
import { ImageButton } from "./ImageButton";
import { Container } from "./Container";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const onRegister = () => {
    if (!login || !email || !password) {
      return;
    }

    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Background>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image />
            <ImageButton style={styles.imageButton} />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <KeyboardAvoidingView
            style={styles.inputWrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
          >
            <TextInput
              placeholder="Логін"
              style={loginIsFocused ? styles.focusedInput : styles.input}
              onFocus={() => setLoginIsFocused(true)}
              onBlur={() => setLoginIsFocused(false)}
              placeholderTextColor="rgb(189, 189, 189)"
              value={login}
              onChangeText={setLogin}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              style={emailIsFocused ? styles.focusedInput : styles.input}
              onFocus={() => setEmailIsFocused(true)}
              onBlur={() => setEmailIsFocused(false)}
              placeholderTextColor="rgb(189, 189, 189)"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                style={passwordIsFocused ? styles.focusedInput : styles.input}
                onFocus={() => setPasswordIsFocused(true)}
                onBlur={() => setPasswordIsFocused(false)}
                placeholderTextColor="rgb(189, 189, 189)"
                value={password}
                onChangeText={setPassword}
              />
              <Pressable
                style={styles.passwordTextWrapper}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.text}>Показати</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
          <Pressable style={styles.submitButton} onPress={onRegister}>
            <Text style={styles.submitButtonText}>Зареєстуватися</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </Background>
    </Container>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
    alignItems: "center",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
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
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "rgb(232, 232, 232)",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  focusedInput: {
    width: "100%",
    height: 50,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapper: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  submitButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  submitButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordTextWrapper: {
    position: "absolute",
    top: 14,
    right: 16,
  },
});
