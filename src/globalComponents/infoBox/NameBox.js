import React from "react";
import { Box, HStack, Text, VStack, Image } from "native-base";
import colors from "../../utils/colors";
import FastImage from "react-native-fast-image";
import ProgressBox from "../ProgressBox/ProgressBox";

//iconGlobe
const globeImg = require("../../../assets/icons/globe.png");
function NameBox(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <VStack backgroundColor={colors.grey} borderRadius={"20"}>
        <FastImage
          style={{ height: 350, borderRadius: 20, borderTopRightRadius: 20 }}
          source={{ uri: props.img }}
        />
        <HStack px={5} pt={4} justifyContent={"space-between"}>
          <VStack>
            <Text
              color={colors.white}
              fontSize={"24"}
              fontWeight={"900"}
              fontFamily={"JosefinSans-Bold"}
              isTruncated
              maxW="250"
            >
              {props.name}
            </Text>
            <Text
              mb={1}
              color={colors.white}
              fontSize={"12"}
              fontWeight={"900"}
              fontFamily={"JosefinSans-Bold"}
              isTruncated
              maxW="250"
            >
              {props.slogan}
            </Text>
          </VStack>
          <Box
            borderRadius={99}
            h={50}
            backgroundColor={colors.lightgrey}
            padding={4}
          >
            <Image width={5} height={5} source={globeImg} alt={'Website'}/>
          </Box>
        </HStack>
        <ProgressBox
                  progress={props.balance}
                  goal={props.goal}
                  prefix={''}
                />
      </VStack>
    </>
  );
}

export default NameBox;

