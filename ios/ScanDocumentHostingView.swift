//
//  ScanDocumentHostingView.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import SwiftUI

@objcMembers final class ScanDocumentHostingView: UIView {
  var view: UIView?
  var viewModel = ScanDocumentViewModel()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupView()
  }

  private func setupView() {
    let view = ScanDocumentView(viewModel: viewModel)
    let vc = UIHostingController(rootView: view)
    vc.view.frame = bounds
    self.addSubview(vc.view)
    self.view = vc.view
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    view?.frame = bounds
  }
}
