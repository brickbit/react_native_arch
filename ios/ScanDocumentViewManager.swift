//
//  ScanDocumentViewManager.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import Foundation

@objc(ScanDocumentViewManager)
class ScanDocumentViewManager: RCTViewManager {

  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    ScanDocumentHostingView()
  }
}


