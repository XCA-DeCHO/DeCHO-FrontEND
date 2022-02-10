import React from 'react';
import {Image, VStack, Text, HStack, Pressable} from 'native-base';
import colors from '../utils/colors';
import Dots from 'react-native-dots-pagination';
import PagerView from 'react-native-pager-view';

const applause = require('../../assets/images/onboarding/applause.png');
const award = require('../../assets/images/onboarding/award.png');
const funding = require('../../assets/images/onboarding/funding.png');
const verified = require('../../assets/images/onboarding/verified.png');

function Onboarding({navigation}) {
  return (
    <PagerView style={{flex: 1}} initialPage={0}>
      <VStack
        w="100%"
        h="100%"
        background={colors.onboardcolor1}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={applause}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Congratulations!
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          You Just Connected your Wallet
        </Text>
        <HStack mt={185} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={0}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      <VStack
        w="100%"
        h="100%"
        background={colors.onboardcolor2}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={verified}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Now, you can vote and approve projects!
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          Only Approved projects will be listed
        </Text>
        <HStack mt={155} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={1}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      <VStack
        w="100%"
        h="100%"
        background={colors.onboardcolor3}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={funding}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          View listed projects here.
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          If a project reaches its goal. It will be funded, else all funds will
          be returned to the donors address.
        </Text>
        <HStack mt={155} alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={2}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
      <VStack
        w="100%"
        h="100%"
        background={colors.onboardcolor4}
        justifyContent={'flex-end'}
        p={5}>
        <Image
          mb={50}
          source={award}
          alt="applause"
          h="300"
          w="300"
          alignSelf={'center'}
        />
        <Text
          mb={5}
          color={colors.white}
          fontWeight={'500'}
          fontSize={'24'}
          fontFamily={'JosefinSans-Bold'}>
          Finally, you can earn choice token for performing basic tasks.
        </Text>
        <Text color={colors.white} fontFamily={'JosefinSans-Regular'}>
          Ensure, you opt in to the Choice ASA
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('AnonymousApproval');
          }}
          mt={75}
          shadow={7}
          h="60"
          w="60"
          rounded={'full'}
          alignItems={'center'}
          justifyContent={'center'}
          background={colors.white}>
          <Text
            color={colors.onboardcolor4}
            fontWeight={'500'}
            fontSize={'20'}
            fontFamily={'JosefinSans-Regular'}>
            Vote!
          </Text>
        </Pressable>
        <HStack alignSelf={'flex-end'}>
          <Dots
            length={4}
            active={3}
            activeColor={colors.grey}
            passiveColor={colors.white}
          />
        </HStack>
      </VStack>
    </PagerView>
  );
}

export default Onboarding;
