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
    <ScrollView background={colors.black} style={{ flex: 1 }}>
      <VStack w="100%" h="100%" px={5} pt={10}>
        <Text
          mt={5}
          mb={5}
          color={colors.white}
          fontSize={"18"}
          fontFamily={"JosefinSans-Bold"}
        >
          DeCHO Wallet Connect[TestNet]
        </Text>
        <WebView source={{ uri: 'https://decentralized-decisions.app/' }} style={{
          width:'100%',
          height:550
        }} />
        <TouchableOpacity
                    style={{
                      backgroundColor: colors.teal,
                      height: 60,
                      width: 126,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      marginVertical: 20,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      navigation.goBack()
                    }}
                  >
                    <Text
                      color={colors.white}
                      fontSize={18}
                      fontFamily={"JosefinSans-Regular"}
                    >
                      {"<"} Cancel
                    </Text>
                  </TouchableOpacity>
      </VStack>

    </ScrollView>
  );
}

export default WalletConnect;

