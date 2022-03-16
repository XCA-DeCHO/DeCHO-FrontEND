import React from "react";
import { VStack, Text, ScrollView, Divider, Image } from "native-base";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from 'react-native-webview';

//Icon Images
const linkImg = require('../../assets/icons/link.png');
const eyeOffImg = require('../../assets/icons/eye-off.png');

const storeOnboardState = async () => {
  try {
    await AsyncStorage.setItem("@onboadState", "Done");
  } catch (e) {
    // saving error
  }
};
const getOnboardState = async () => {
  try {
    return (value = await AsyncStorage.getItem("@onboadState"));
  } catch (e) {
    // error reading value
  }
};

function WalletConnect({ navigation }) {
  getOnboardState()
    .then((data) => data)
    .then((value) => {
      if (value == "Done") {
        navigation.navigate("AnonymousApproval");
      }
    });

  return (
      <VStack w="100%" h="100%" pt={10} background={colors.black}>
        <Text
          mt={5}
          px={5}
          mb={5}
          color={colors.white}
          fontSize={"18"}
          fontFamily={"JosefinSans-Bold"}
        >
          DeCHO Wallet Connect[TestNet]
        </Text>
        <WebView source={{ uri: 'https://decentralized-decisions.app/' }} style={{
          width:'100%',
        }} />
        <TouchableOpacity
      style={backButtonStyle}
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Text
        color={colors.white}
        fontSize={18}
        fontFamily={"JosefinSans-Regular"}
      >
        {"<"} Go Back
      </Text>
</TouchableOpacity>
        </VStack>

  );
}

const backButtonStyle={
  position:'absolute',
  backgroundColor: colors.teal,
  height: 60,
  bottom:0,
  right:0,
  width: 126,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  margin: 20,
  flexDirection: "row",
}

export default WalletConnect;

