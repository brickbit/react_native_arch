//
//  ScanDocumentViewModel.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import Foundation

final class ScanDocumentViewModel: ObservableObject {
  var onChangeBoldToggle: RCTDirectEventBlock = { _ in }
  var onChangeItalicToggle: RCTDirectEventBlock = { _ in }
  var onChangeUnderlineToggle: RCTDirectEventBlock = { _ in }
  
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
}
