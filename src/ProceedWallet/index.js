import React from 'react';
import {
    VStack,
    Text,
    ScrollView,
    Button,
    Divider,
} from 'native-base';
import colors from '../utils/colors';
import { Platform } from "react-native";

function ProceedWallet({ navigation }) {


        return (
          <ScrollView background={colors.white} style={{ flex: 1 }}>
              <VStack w="100%" h="100%" px={5} pt={10}>
                  <Text
                    mt={5}
                    mb={5}
                    color={colors.black}
                    fontSize={'30'}
                    fontWeight={'500'}
                    fontFamily={'JosefinSans-Bold'}>
                      DeCHO
                  </Text>
                  <Text
                    mb={5}
                    color={colors.black}
                    fontSize={'14'}
                    fontFamily={'JosefinSans-Regular'}>
                      How do you want to proceed?
                  </Text>
                  <Button
                    my={5}
                    variant={'subtle'}

                    onPress={() => {
                        //navigation.navigate('ConnectWallet');
                        null;
                    }}
                    colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={'JosefinSans-Regular'}>
                          Use Existing Wallet
                      </Text>
                  </Button>
                  <Button
                    my={5}
                    variant={'subtle'}
                    _disabled={true}
                    onPress={() => {
                        //navigation.navigate('NewWalletSuccess');
                    }}
                    colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={'JosefinSans-Regular'}>
                          Generate a new Wallet
                      </Text>
                  </Button>
                  <Button my={5} variant={'outline'}
                          onPress={() => {
                            navigation.navigate('Onboarding');
                          }}
                          colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={'JosefinSans-Regular'}>
                          Stay Anonymous
                      </Text>
                  </Button>
                  <Divider my={5} />
                  <Text fontSize={'16'} fontFamily={'JosefinSans-Regular'}>
                      Generate a new Wallet allows you operate and use majority of the
                      functions inside the app.
                  </Text>
                  <Text fontSize={'16'} fontFamily={'JosefinSans-Regular'}>
                      {'\n'}Staying Anonymous, you will only be able to use your external
                      wallet to make transactions.
                  </Text>
                  <Text fontSize={'16'} fontFamily={'JosefinSans-Regular'}>
                      {'\n'}Using an Existing wallet, you give the app authority to make
                      the permitted transactions on your behalf.
                  </Text>
              </VStack>
          </ScrollView>
        );
    }

export default ProceedWallet;

