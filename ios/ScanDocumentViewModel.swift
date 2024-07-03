//
//  ScanDocumentViewModel.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import Foundation

final class ScanDocumentViewModel: ObservableObject {
  @Published var passportData: NFCPassportModel? = nil

  var onChangeBoldToggle: RCTDirectEventBlock = { _ in }
  var onChangeItalicToggle: RCTDirectEventBlock = { _ in }
  var onChangeUnderlineToggle: RCTDirectEventBlock = { _ in }
  private let passportReader = PassportReader()

  @Published var isBold: Bool = false {
      didSet {
        onChangeBoldToggle(["isBold": isBold])
      }
    }
    @Published var isItalic: Bool = false {
      didSet {
        onChangeItalicToggle(["isItalic": isItalic])
      }
    }
    @Published var isUnderline: Bool = false {
      didSet {
        onChangeUnderlineToggle(["isUnderline": isUnderline])
      }
    }

    init() { }

    init(
      onChangeBoldToggle: @escaping RCTDirectEventBlock,
      onChangeItalicToggle: @escaping RCTDirectEventBlock,
      onChangeUnderlineToggle: @escaping RCTDirectEventBlock
    ) {
      self.onChangeBoldToggle = onChangeBoldToggle
      self.onChangeItalicToggle = onChangeItalicToggle
      self.onChangeUnderlineToggle = onChangeUnderlineToggle
    }
  
  func scanDocument(docNumber: String, birthDate: String, expiryDate: String) {
    Task {
      let passportUtils = PassportUtils()
      let mrzKey = passportUtils.getMRZKey( passportNumber: docNumber, dateOfBirth: birthDate, dateOfExpiry: expiryDate)
      let customMessageHandler : (NFCViewDisplayMessage)->String? = { (displayMessage) in
          switch displayMessage {
              case .requestPresentPassport:
                  return "Hold your iPhone near an NFC enabled document ID."
              default:
                  // Return nil for all other messages so we use the provided default
                  return nil
          }
      }
      
      let passport = try await passportReader.readPassport( mrzKey: mrzKey, customDisplayMessage:customMessageHandler)
      passportData = passport
    }
  }
}
