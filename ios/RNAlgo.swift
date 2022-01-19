//
//  RNAlgo.swift
//  reDeCHO
//
//  Created by Isaac Adewumi on 19/01/2022.
//

import Foundation
import swift_algorand_sdk
import react_native_algo

var ALGOD_API_ADDR = "https://api.algoexplorer.io/v2";
var ALGOD_API_TOKEN = "";
var ALGOD_API_PORT = ""
var algodClient = AlgodClient(host: ALGOD_API_ADDR, port: ALGOD_API_PORT, token: ALGOD_API_TOKEN);

@objc(RNAlgo)
class RNAlgo: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  @objc
  func createAccount() -> [String: String] {
    let account = try! Account();
    return ["mnemonic": account.toMnemonic(), "address": account.getAddress().description]
  }
  
  @objc
  func hellWorld() -> String {
    return "Hello World"
  }
}
