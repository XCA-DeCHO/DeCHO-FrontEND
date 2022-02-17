import React from 'react';
import {Button, ScrollView, useToast, Text, VStack, Divider} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Linking} from 'react-native';
import colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeOnboardState = async () => {
  try {
    await AsyncStorage.setItem('@onboadState', 'null')
  } catch (e) {
    // saving error
  }
}

function Options({navigation}) {
  const toast = useToast();

  return (
    <ScrollView bg={colors.white}>
      <VStack w={'100%'} h={'100%'} px={5} pt={10} space={3}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text p={2} fontFamily={'JosefinSans-Bold'}>
            {'<< Go Back'}
          </Text>
        </TouchableOpacity>
        <Text
          color={colors.black}
          fontSize={'30'}
          fontFamily={'JosefinSans-Bold'}
          mx={2}>
          Settings
        </Text>
        <Divider />
        <VStack space={10} p={2}>
          <TouchableOpacity
            onPress={() => {
              
              storeOnboardState(); 

              navigation.navigate('ProceedWallet');
            }}>
            <Text fontSize={20} fontFamily={'JosefinSans-Regular'}>
              Disconnect
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://decho.finance/contact-us').catch((error) =>
              toast.show({description: error}))
            }}>
            <Text fontSize={20} fontFamily={'JosefinSans-Regular'}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </VStack>
        <Divider />
        <Button
          variant={'link'}
          my={2}
          onPress={() => {
            Linking.openURL('https://decho.finance').catch((error) =>
              toast.show({description: error}),
            );
          }}
          colorScheme={'muted'}
          alignSelf={'center'}>
          <Text
            fontSize={20}
            color={colors.grey}
            fontFamily={'JosefinSans-Bold'}>
            Visit our website
          </Text>
        </Button>
        {/*<Divider/>*/}
        {/*<Text*/}
        {/*  color={colors.black}*/}
        {/*  fontSize={'30'}*/}
        {/*  fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''} mx={2}>*/}
        {/*  Balances*/}
        {/*</Text>*/}
        {/*<Text*/}
        {/*  color={colors.black}*/}
        {/*  fontSize={'20'}*/}
        {/*  fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''} mx={2}>*/}
        {/*  200 ALGO*/}
        {/*</Text>*/}
        {/*<Text*/}
        {/*  color={colors.black}*/}
        {/*  fontSize={'20'}*/}
        {/*  fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''} mx={2}>*/}
        {/*  30,000 Choice*/}
        {/*</Text>*/}
        {/*<Pressable onPress={()=>{*/}
        {/*  Clipboard.setString('SWKJYUGFDSHKJI88GF90UUHGD45D')*/}
        {/*  toast.show(*/}
        {/*    {*/}
        {/*      description : 'Copied Address'*/}
        {/*    }*/}
        {/*  )*/}
        {/*}}*/}
        {/*           flexDirection={'row'} background={colors.grey} p={5} borderRadius={'md'} justifyContent={'space-between'}>*/}
        {/*  <Text color={colors.black} fontSize={'12'} fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>*/}
        {/*    SWKJYUGFDSHKJI88GF90UUHGD45D*/}
        {/*  </Text>*/}
        {/*  <Image source={copy} alt='applause' h='5' w='5' alignSelf={'center'} />*/}
        {/*</Pressable>*/}
      </VStack>
    </ScrollView>
  );
}

export default Options;
