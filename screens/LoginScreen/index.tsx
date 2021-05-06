import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { HomeStackParamList } from "../../types";
import styles from "./styles";

interface LoginScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.boldHeading}>Login to your</Text>
          <Text style={styles.regularHeading}>Zoya&rsquo;s Pantry account</Text>
        </View>
        <View>
          <TextField
            value={email}
            keyboardType="email-address"
            onChangeText={(input) => setEmail(input)}
            placeholder="Email address"
          />
          <TextField
            value={password}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.forgotButton}
        >
          <Text style={styles.forgotButtonText}>Forgot?</Text>
        </TouchableOpacity>
        <Button
          text="Login"
          onPressFn={() => {}}
          buttonDimensions={{
            button: {
              height: 40,
              width: 250,
            },
            shadow: {
              marginTop: -34,
            },
          }}
          fontSize={15}
          style={styles.loginButton}
        />
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
