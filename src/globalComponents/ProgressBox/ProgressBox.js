import React from "react";
import { Progress, Text, VStack } from "native-base";
import { ImageBackground, Platform } from "react-native";

import colors from "../../utils/colors";

function ProgressBox (props) {


    return(
      <VStack bg={colors.lightBlue} px={5} borderRadius={'md'} mt={5} py={2}>
        <Text
          m={1}
          color={colors.black}
          fontSize={'18'}
          fontFamily={'JosefinSans-Regular'}>
            {props.prefix}{Number(props.progress.toFixed(2)).toLocaleString()}
        </Text>
        <Progress mb={1} value={100 * props.progress/props.goal} colorScheme={'emerald'}/>
        <Text
          mb={1}
          color={colors.black}
          fontSize={'18'}
          fontFamily={'JosefinSans-Regular'}
            alignSelf={'flex-end'}
        >
          {props.prefix}{Number(props.goal.toFixed(2)).toLocaleString()}
        </Text>
      </VStack>

    )}

export default ProgressBox;
