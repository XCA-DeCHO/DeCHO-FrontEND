import React from 'react';
import {Text, VStack} from 'native-base';
import colors from '../../utils/colors';
import FastImage from 'react-native-fast-image';
function NameBox(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <VStack
        backgroundColor={colors.white}
        borderTopRadius={'md'}
        borderBottomWidth={2}
        borderBottomColor={colors.grey}
        shadow={2}>
        <FastImage
          style={{height: 350, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
          source={{uri: props.img}}
          borderTopRadius={5}
        />
      </VStack>
      <VStack
        bgColor={colors.white}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingRight: 20,
        }}
        shadow={2}
        borderBottomRadius={'md'}>
        <Text
          color={colors.black}
          fontSize={'24'}
          fontWeight={'500'}
          fontFamily={'JosefinSans-Bold'}>
          {props.name}
        </Text>
        <Text
          mb={1}
          color={colors.grey}
          fontSize={'12'}
          fontFamily={'JosefinSans-Regular'}>
          {props.slogan}
        </Text>
      </VStack>
    </>
  );
}

export default NameBox;
