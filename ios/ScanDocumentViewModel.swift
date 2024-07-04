//
//  ScanDocumentViewModel.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import Foundation
import NFCPassportReader

final class ScanDocumentViewModel: ObservableObject {
  @Published var passportData: NFCPassportModel? = nil

  private let passportReader = PassportReader()

  init() { }

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
      DispatchQueue.main.async {
        self.passportData = passport
      }
    }
  }
}
