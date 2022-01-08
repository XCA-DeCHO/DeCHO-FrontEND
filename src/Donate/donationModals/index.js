import React from "react";
import { HStack, Image, Input, Progress, ScrollView, Text, VStack } from "native-base";
import settings from "../../assets/images/settings.png";
import { ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from "../utils/colors";
import AppLoading from 'expo-app-loading';



function Approval() {

  const settings = require('../../assets/images/settings.png');
  const xki = require('../../assets/images/xki.jpg');
  const close = require('../../assets/images/approval/close.png');
  const info = require('../../assets/images/approval/info.png');
  const dLogo = require('../../assets/images/d.png');
  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <ScrollView bg={colors.white}>
        <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
          <Image source={settings} alt={'settings'} size={7} alignSelf={'flex-end'}/>
          <Input placeholder={'Search....'} />
          <ImageBackground source={xki} style={{height:350}} imageStyle={{ borderRadius: 10}}>
            <LinearGradient colors={['transparent', colors.white]} style={{flex:1,
              justifyContent:'flex-end',
              alignItems:'flex-end',
              paddingRight: 20,
            }}>
              <Text
                color={colors.black}
                fontSize={'24'}
                fontFamily={'JosefinSans_700Bold'}>
                Xekhai Industries
              </Text>
              <Text
                mb={1}
                color={colors.grey}
                fontSize={'12'}
                fontFamily={'JosefinSans_400Regular'}>
                A great industry
              </Text>
            </LinearGradient>
          </ImageBackground>
          <HStack justifyContent={'center'} alignItems={'center'} space={5} mt={2}>
            <TouchableOpacity>
              <Image source={info} alt={'settings'} size={7} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={dLogo} alt={'settings'} size={10} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={close} alt={'settings'} size={7} />
            </TouchableOpacity>
          </HStack>
          <VStack bg={colors.lightBlue} px={5} borderRadius={'md'} mt={5} py={2}>
            <Text
              m={1}
              color={colors.black}
              fontSize={'18'}
              fontFamily={'JosefinSans_400Regular'}>
              13,056
            </Text>
            <Progress mb={1} value={'55'} colorScheme={'emerald'}/>
            <Text
              mb={1}
              color={colors.black}
              fontSize={'18'}
              fontFamily={'JosefinSans_400Regular'}
              alignSelf={'flex-end'}
            >
              20,000
            </Text>
          </VStack>
          <Text
            mt={10}
            color={colors.black}
            fontSize={'12'}
            fontFamily={'JosefinSans_400Regular'}
            alignSelf={'flex-end'}
          >
            View approved projects>>
          </Text>
        </VStack>
      </ScrollView>
    )}
}

export default Approval
