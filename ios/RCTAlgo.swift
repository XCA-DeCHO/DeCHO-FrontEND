//
//  RCTAlgo.swift
//  reDeCHO
//
//  Created by Joshua Praise on 13/01/2022.
//

import Foundation

import swift_algorand_sdk

var ALGOD_API_ADDR="ALGOD-API-ADDRESS";
var ALGOD_API_TOKEN="ALGOD-API-TOKEN";
var ALGOD_API_PORT="ALGOD-API-PORT"
var algodClient=AlgodClient(host: ALGOD_API_ADDR, port: ALGOD_API_PORT, token: ALGOD_API_TOKEN)


func connect(){
 algodClient.getStatus().execute(){nodeStatusResponse in
        if(nodeStatusResponse.isSuccessful){
            print(nodeStatusResponse.data!.lastRound)
        }else{
            print(nodeStatusResponse.errorDescription)
        }
    
    }

    algodClient.transactionParams().execute(){ paramResponse in
    if(paramResponse.isSuccessful){
        print(paramResponse.data!.lastRound)
    }else{
        print(paramResponse.errorDescription);
    }
}
}
