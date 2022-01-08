import React from "react";
import { Button, HStack, Image, useToast, Modal, Pressable, Progress, ScrollView, Text, VStack } from "native-base";
import { Platform, TouchableOpacity } from "react-native";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from "../../../utils/colors";
import AppLoading from 'expo-app-loading';
import Clipboard from "@react-native-clipboard/clipboard";
import NameBox from "../../../globalComponents/infoBox/NameBox";


function AnonymousApproval({ navigation }) {

  const settings = require('../../../../assets/images/settings.png');
  const close = require('../../../../assets/images/approval/close.png');
  const info = require('../../../../assets/images/approval/info.png');
  const dLogo = require('../../../../assets/images/approval/check.png');
  const toast = useToast()
  const copy = require('../../../../assets/images/connectWallet/copy.png')

  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });
  const [showModal, setShowModal] = React.useState(false);

  if (!fontsLoaded && Platform.OS == 'ios') {
    return <AppLoading />;
  } else {
  return(
    <ScrollView bg={colors.white}>
      <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
        <TouchableOpacity alignSelf={'flex-end'} onPress={()=>{
          navigation.navigate('Options')
        }}>
        <Image source={settings} alt={'settings'} size={7} alignSelf={'flex-end'}/>
        </TouchableOpacity>
        <Text
          color={colors.black}
          fontSize={'24'}
          fontWeight={'bold'}
          fontFamily={'JosefinSans_700Bold'}>
          Hi, Good morning.
        </Text>
        <NameBox name={'XCA DeCHO'} slogan={'A great DeCHO'}/>
        <HStack justifyContent={'center'} alignItems={'center'} space={5} mt={10}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ViewInfo')
        }}>
          <Image source={info} alt={'info'} size={7} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          setShowModal(true)
        }}>
          <Image source={dLogo} alt={'donate'} size={10} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={close} alt={'disprove'} size={7} />
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
        <TouchableOpacity onPress={()=>{

        }}>
        <Text
        mt={10}
        color={colors.black}
        fontSize={'12'}
        fontFamily={'JosefinSans_400Regular'}
        alignSelf={'flex-end'}
        >
        View approved projects>>
      </Text></TouchableOpacity>
      </VStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content w={'80%'}>
          <Modal.CloseButton />
          <Modal.Header>Vote</Modal.Header>
          <Modal.Body>
            <Text
              my={2}
              color={colors.black}
              fontSize={'16'}
              fontFamily={'JosefinSans_400Regular'}>
              Make your vote towards this project by sending CHOICE to this address.
              {'\n'}Your Choice will be refunded and rewarded!
            </Text>
            <Pressable onPress={()=>{
              Clipboard.setString('SWKJYUGFDSHKJI88GF90UUHGD45D')
              toast.show(
                {
                  description : 'Copied Address'
                }
              )
            }}
                       flexDirection={'row'} background={colors.grey} p={5} borderRadius={'md'} justifyContent={'space-between'}>
              <Text color={colors.black} fontSize={'12'} fontFamily={'JosefinSans_400Regular'}>
                SWKJYUGFDSHKJI88GF90UUHGD45D
              </Text>
              <Image source={copy} alt='applause' h='5' w='5' alignSelf={'center'} />
            </Pressable>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              colorScheme="teal">
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </ScrollView>
  )}
}

export default AnonymousApproval;
