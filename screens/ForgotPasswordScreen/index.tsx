import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { HomeStackParamList } from "../../types";
import styles from "./styles";

interface ForgotPasswordScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.boldHeading}>Forgot your password?</Text>
        <Text style={styles.regularHeading}>Please enter your email</Text>
        <Text style={styles.helpText}>
          You will receive a link to create a{`\n`}new password via email.
        </Text>
        <TextField
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
        />
        <Button
          text="Reset password"
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
          style={styles.forgotButton}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
