//
//  ScanDocumentView.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import SwiftUI

struct ScanDocumentView: View {
  @ObservedObject var viewModel: ScanDocumentViewModel

  var body: some View {
    Form {
      Section {
        Toggle("Bold", isOn: $viewModel.isBold)
        Toggle("Italic", isOn: $viewModel.isItalic)
        Toggle("Underline", isOn: $viewModel.isUnderline)
      }
    }
  }
}


