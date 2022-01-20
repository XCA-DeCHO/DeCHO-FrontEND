//
//  RNAlgo.m
//  reDeCHO
//
//  Created by Isaac Adewumi on 19/01/2022.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNAlgo, NSObject)

RCT_EXTERN_METHOD(createAccount)
RCT_EXTERN_METHOD(helloWorld)
//CallBack is Nice.
RCT_EXTERN_METHOD(useCallBackEniola: (RCTResponseSenderBlock)callback)

@end
