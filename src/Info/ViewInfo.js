import React from 'react';
import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
  Pressable,
  Progress,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {Platform, TouchableOpacity} from 'react-native';
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from '../utils/colors';
import AppLoading from 'expo-app-loading';
import NameBox from '../globalComponents/infoBox/NameBox';
import ProgressBox from '../globalComponents/ProgressBox/ProgressBox';

function ViewInfo({route, navigation}) {
  const {item, testImage} = route.params;
  const toast = useToast();
  const copy = require('../../assets/images/connectWallet/copy.png');

  let [fontsLoaded] = useFonts({JosefinSans_700Bold, JosefinSans_400Regular});
  // const [showModal, setShowModal] = React.useState(false);
  // let pFix = '';

  return (
    <ScrollView bg={colors.white}>
      <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
        <Button
          variant={'link'}
          my={5}
          onPress={() => {
            navigation.goBack();
          }}
          colorScheme={'muted'}
          alignSelf={'flex-start'}>
          {'<< Go Back'}
        </Button>
        <Text
          color={colors.black}
          fontSize={'24'}
          fontFamily={'JosefinSans-Regular'}
          mx={2}>
          Hi, Good morning.
        </Text>
        <NameBox
          name={item.title}
          slogan={item.short_description}
          img={testImage}
        />

        <ProgressBox
          goal={item.cause_approval.goal}
          progress={0}
          prefix={'$'}
        />
        <Text fontSize={12} pb={10} pt={10}>
          {item.long_description}
        </Text>
      </VStack>
    </ScrollView>
  );
}

export default ViewInfo;
