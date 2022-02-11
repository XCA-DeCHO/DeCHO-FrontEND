import React, {useRef} from 'react';

import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
  Pressable,
  ScrollView,
  Text,
  VStack,
  FlatList,
  Spinner,
} from 'native-base';
import {
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import colors from '../../../utils/colors';
import Clipboard from '@react-native-clipboard/clipboard';
import NameBox from '../../../globalComponents/infoBox/NameBox';
import ProgressBox from '../../../globalComponents/ProgressBox/ProgressBox';
import QRCode from 'react-native-qrcode-svg';

function AnonymousApproval({navigation}) {
  const settings = require('../../../../assets/images/options.png');
  const close = require('../../../../assets/images/approval/close.png');
  const info = require('../../../../assets/images/approval/info.png');
  const dLogo = require('../../../../assets/images/approval/check.png');
  const copy = require('../../../../assets/images/connectWallet/copy.png');
  const logo = require('../../../../assets/images/logo/DechoLogomarkgradientlogomark.png');
  const background = require('../../../../assets/images/bgImgs/blueWhite.jpg');
  const toast = useToast();

  const width = Dimensions.get('window').width;

  const flatListRef = useRef();
  const [showModal, setShowModal] = React.useState(false);
  const [approvals, setApprovals] = React.useState(null);
  const [address, setAddress] = React.useState('');

  //adding dynamic date greeting
  let today = new Date();
  let nowHour = today.getHours();
  let greetingString;
  if (nowHour < 12) {
    greetingString = 'morning';
  } else if (nowHour >= 12 && nowHour < 17) {
    greetingString = 'afternoon';
  } else {
    greetingString = 'evening';
  }

  const onPressDisprove = (index) => {
    try {
      flatListRef.current.scrollToIndex({animated: true, index: index + 1});
    } catch (error) {
      flatListRef.current.scrollToIndex({animated: true, index: index});
      toast.show({
        description: 'You have gotten to the end of the list',
      });
    }
  };

  if (!approvals) {
    fetch('https://decho-staging.herokuapp.com/api/v1/causes')
      .then((response) => response.json())
      .then((responseData) => {
        setApprovals(
          responseData.data.filter((cause) => cause.status === 'pending'),
        );
      })
      .catch((error) => console.log(error));
  }

  function checkLoading() {
    if (!approvals) {
      return <Spinner />;
    } else {
      return (
        <FlatList
          ref={flatListRef}
          data={approvals}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item, index}) => {
            return (
              <VStack w={width} px={5} py={1}>
                <NameBox
                  name={item.title}
                  slogan={item.short_description}
                  img={item.photo_url}
                />
                <HStack
                  justifyContent={'center'}
                  alignItems={'center'}
                  space={5}
                  mt={10}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ViewInfo', {
                        item,
                      });
                    }}>
                    <Image source={info} alt={'info'} size={7} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setAddress(item.decho_wallet.address);
                      setShowModal(true);
                    }}>
                    <Image source={dLogo} alt={'donate'} size={10} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onPressDisprove(index)}>
                    <Image source={close} alt={'disprove'} size={7} />
                  </TouchableOpacity>
                </HStack>
                <ProgressBox
                  progress={item.balance}
                  goal={item.cause_approval.goal}
                  prefix={''}
                />
              </VStack>
            );
          }}
        />
      );
    }
  }

  return (
    <ImageBackground
      source={background}
      style={{
        height: '100%',
      }}>
    <ScrollView >
      <VStack w={'100%'} h={'100%'} pt={10} space={3}>
        <TouchableOpacity
          style={{
            backgroundColor:colors.white,
            borderRadius:150,
            padding: 10,
            width:50,
            alignSelf:'flex-end',
            margin:10,
            elevation:5
          }}
          onPress={() => {
            navigation.navigate('Options');
          }}>
          <Image
            source={settings}
            alt={'settings'}
            size={7}
            alignSelf={'flex-end'}
            />
          </TouchableOpacity>
          <Text
            mx={5}
            color={colors.black}
            fontSize={'24'}
            fontWeight={'500'}
            fontFamily={'JosefinSans-Bold'}>
            Hi, Good {greetingString}.
          </Text>
          {/*  Commented out the search */}
          {/*<Input mx={5} placeholder={'Search....'} />*/}
          <Text fontSize={10} px={5}>
            Swipe left to see more{'>>'}
          </Text>
          {checkLoading()}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AnonymousDonate');
            }}>
            <Text
              mx={10}
              my={5}
              color={colors.black}
              fontSize={'12'}
              fontFamily={'JosefinSans-Regular'}
              alignSelf={'flex-end'}>
              View approved projects{'>>'}
            </Text>
          </TouchableOpacity>
        </VStack>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content w={'95%'}>
            <Modal.CloseButton />
            <Modal.Header>Vote</Modal.Header>
            <Modal.Body>
              <Text
                my={2}
                color={colors.black}
                fontSize={'16'}
                fontFamily={'JosefinSans-Regular'}>
                Make your vote towards this project by sending CHOICE to this
                address.
                {'\n'}Your Choice will be refunded and rewarded!
              </Text>
              <HStack
                alignSelf={'center'}
                p={1}
                m={2}
                borderWidth={3}
                borderColor={colors.grey}
                borderRadius={'sm'}>
                <QRCode
                  value={address}
                  size={250}
                  logo={logo}
                  logoBackgroundColor={colors.white}
                  logoBorderRadius={800}
                  color={colors.grey}
                />
              </HStack>
              <Pressable
                onPress={() => {
                  Clipboard.setString(address);
                  toast.show({
                    description: 'Copied Address',
                  });
                }}
                flexDirection={'row'}
                background={colors.grey}
                px={1}
                py={5}
                borderRadius={'md'}
                justifyContent={'space-around'}>
                <Text
                  color={colors.black}
                  fontSize={'8'}
                  fontFamily={'JosefinSans-Regular'}>
                  {address}
                </Text>
                <Image
                  source={copy}
                  alt="applause"
                  h="3"
                  w="3"
                  alignSelf={'center'}
                />
              </Pressable>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onPress={() => {
                  Linking.openURL('algorand://main');
                  setShowModal(false);
                }}
                bgColor="#0cb4cc"
                colorScheme="teal">
                Proceed
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
}

export default AnonymousApproval;
