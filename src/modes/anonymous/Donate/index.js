import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
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
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from '../../../utils/colors';
import Clipboard from '@react-native-clipboard/clipboard';
import NameBox from '../../../globalComponents/infoBox/NameBox';
import ProgressBox from '../../../globalComponents/ProgressBox/ProgressBox';

function AnonymousDonate({navigation}) {
  const settings = require('../../../../assets/images/settings.png');
  const copy = require('../../../../assets/images/connectWallet/copy.png');
  const logo = require('../../../../assets/images/logo/DechoLogomarkgradientlogomark.png');
  const background = require('../../../../assets/images/bgImgs/blueWhite.jpg');

  const toast = useToast();

  const width = Dimensions.get('window').width;

  let [fontsLoaded] = useFonts({JosefinSans_700Bold, JosefinSans_400Regular});

  const [showModal, setShowModal] = React.useState(false);
  const [address, setAddress] = React.useState('');

  const [approvals, setApprovals] = React.useState(null);

  if (!approvals) {
    fetch('https://decho-staging.herokuapp.com/api/v1/causes')
      .then((response) => response.json())
      .then((responseData) => {
        setApprovals(
          responseData.data.filter((cause) => cause.status === 'Approved'),
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
          data={approvals}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => {
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
                  mt={10}></HStack>
                <ProgressBox
                  progress={
                    item.balance === 'Error: not Opted in' ? 0 : item.balance
                  }
                  goal={item.donations.goal}
                  prefix={''}
                />
                <Button
                  my={2}
                  colorScheme={'teal'}
                  onPress={() => {
                    setAddress(item.decho_wallet.address);
                    setShowModal(true);
                  }}>
                  <Text fontFamily={'JosefinSans-Regular'} color={colors.white}>
                    Donate
                  </Text>
                </Button>
              </VStack>
            );
          }}
        />
      );
    }
  }

  return (
    <ImageBackground source={background} style={{
      height: '100%'
    }}>
    <ScrollView>
      <VStack w={'100%'} h={'100%'} pt={10} space={3}>
        <TouchableOpacity
          alignSelf={'flex-end'}
          onPress={() => {
            navigation.navigate('Options');
          }}>
          <Image
            mx={5}
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
          fontFamily={'JosefinSans-Regular'}>
          Donate
        </Text>
        {/*<Input mx={5} placeholder={'Search....'} />*/}
        <Text fontSize={10} px={5}>
          Swipe left to see more {'>>'}
        </Text>
        {checkLoading()}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            m={5}
            color={colors.black}
            fontSize={'12'}
            fontFamily={'JosefinSans-Regular'}
            alignSelf={'flex-start'}>
            {'<< View unapproved projects'}
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
              Make your vote towards this project by sending ALGO to this
              address.
              {'\n'}Your Algo will be refunded if this project does not reach
              it's Goal
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
              py={5}
              px={2}
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
                setShowModal(false);
              }}
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

export default AnonymousDonate;
