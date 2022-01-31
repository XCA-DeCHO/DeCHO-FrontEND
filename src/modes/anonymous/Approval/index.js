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
    Input,
    FlatList, Spinner,
} from 'native-base';
import {Platform, TouchableOpacity, Dimensions} from 'react-native';
import colors from '../../../utils/colors';
import Clipboard from '@react-native-clipboard/clipboard';
import NameBox from '../../../globalComponents/infoBox/NameBox';
import ProgressBox from '../../../globalComponents/ProgressBox/ProgressBox';
import {TestData} from '../../../utils/data';
import info from "../../../../assets/images/approval/info.png";

function AnonymousApproval({navigation}) {
  const settings = require('../../../../assets/images/settings.png');
  const close = require('../../../../assets/images/approval/close.png');
  const info = require('../../../../assets/images/approval/info.png');
  const dLogo = require('../../../../assets/images/approval/check.png');
  const copy = require('../../../../assets/images/connectWallet/copy.png');

  const toast = useToast();

  const width = Dimensions.get('window').width;

  const [showModal, setShowModal] = React.useState(false);
  const [approvals, setApprovals] = React.useState(null);
  const [address, setAddress] = React.useState('');

  //adding dynamic date greeting
    let today = new Date();
    let nowHour = today.getHours();
    let greetingString;
    if(nowHour < 12){
        greetingString = 'morning';
    }else if(nowHour > 12 & nowHour < 17){
        greetingString = 'afternoon'
    }else{
        greetingString = 'evening'
    }


  if (!approvals) {
    fetch('https://decho-staging.herokuapp.com/api/v1/causes')
      .then(response => response.json())
      .then(responseData => {
        setApprovals(responseData.data);
      })
      .catch(error => console.log(error));
  }

  function checkLoading(){
      if (!approvals) {
          return(<Spinner/>);
      } else{
          return(
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
                                  img={TestData[0].image}
                              />
                              <HStack
                                  justifyContent={'center'}
                                  alignItems={'center'}
                                  space={5}
                                  mt={10}>
                                  <TouchableOpacity
                                      onPress={() => {
                                          navigation.navigate('ViewInfo');
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
                                  <TouchableOpacity>
                                      <Image source={close} alt={'disprove'} size={7} />
                                  </TouchableOpacity>
                              </HStack>
                              <ProgressBox
                                  progress={item.progress || 0}
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
    <ScrollView bg={colors.white}>
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
          fontFamily={'JosefinSans-Bold'}>
          Hi, Good {greetingString}.
        </Text>
        {/*  Commented out the search */}
        {/*<Input mx={5} placeholder={'Search....'} />*/}
        <Text fontSize={10} px={5}>
          Swipe left to see more >>
        </Text>
          { checkLoading() }
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
            View approved projects>>
          </Text>
        </TouchableOpacity>
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
              fontFamily={'JosefinSans-Regular'}>
              Make your vote towards this project by sending CHOICE to this
              address.
              {'\n'}Your Choice will be refunded and rewarded!
            </Text>
            <Pressable
              onPress={() => {
                Clipboard.setString(address);
                toast.show({
                  description: 'Copied Address',
                });
              }}
              flexDirection={'row'}
              background={colors.grey}
              p={2}
              borderRadius={'md'}
              justifyContent={'space-between'}>
              <Text
                color={colors.black}
                fontSize={'7'}
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
  );
}

export default AnonymousApproval;
