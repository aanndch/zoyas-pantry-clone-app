import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";

import Button from "../../components/Button";
import { HomeStackParamList } from "../../types";
import styles from "./styles";
import TextField from "../../components/TextField";

interface RegisterScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen = ({ navigation }: RegisterScreenProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.boldHeading}>Register an account</Text>
          <Text style={styles.regularHeading}>and join our community</Text>
        </View>
        <View>
          <TextField
            value={firstName}
            keyboardType="default"
            onChangeText={(input) => setFirstName(input)}
            placeholder="First Name"
          />
          <TextField
            value={lastName}
            keyboardType="default"
            onChangeText={(input) => setLastName(input)}
            placeholder="Last Name"
          />
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
        <Button
          text="Sign up"
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
          style={styles.registerButton}
        />
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>
            Already have an account?&nbsp;
          </Text>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
