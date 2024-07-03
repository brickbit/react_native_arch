//
//  ScanDocumentView.swift
//  fcmTravelGuide
//
//  Created by Roberto Garcia Romero on 3/7/24.
//

import SwiftUI


struct ScanDocumentView: View {
  @ObservedObject var viewModel: ScanDocumentViewModel
  @State private var docNumber: String = ""
  @State private var birthDate: Date = Date.now
  @State private var expiryDate: Date = Date.now

  var body: some View {
    VStack {
      Text("ID card reader with NFC")
        .font(.system(size: 24)).fontWeight(.semibold)
        .padding(.top, 16)
      PassportView(passportData: viewModel.passportData)
      Text("Select your birth date").font(.system(size: 14))
      DatePicker("", selection: $birthDate, in: ...Date.now, displayedComponents: .date)
        .labelsHidden()
        .frame(maxWidth: .infinity)
        .padding(.horizontal,16)
        .padding(.top,8)
      Text("Select the document's expiry date").font(.system(size: 14))
      DatePicker("", selection: $expiryDate, in: Date.now..., displayedComponents: .date)
        .labelsHidden()
        .frame(maxWidth: .infinity)
        .padding(.horizontal,16)
        .padding(.top,8)
      Text("Select the document's support number").font(.system(size: 14))
      TextField("Support number", text: $docNumber)
        .textFieldStyle(.roundedBorder)
        .padding(.horizontal,16)
        .padding(.top,16)
      Button("Scan document") {
        viewModel.scanDocument(docNumber: docNumber, birthDate: birthDate.toDocDateFormat(), expiryDate: expiryDate.toDocDateFormat())
      }.padding()
        .frame(maxWidth: .infinity)
        .background(Color.black)
        .foregroundStyle(.white)
        .clipShape(Capsule())
        .padding(16)
    }
  }
}

struct PassportView: View {
  var passportData: NFCPassportModel?

  var body: some View {
    if(passportData == nil) {
      Image("scanNfc")
        .resizable()
        .frame(height: 210)
        .aspectRatio(contentMode: .fill)
        .textFieldStyle(.roundedBorder)
        .padding(16)
    } else {
        VStack {
          HStack {
            Image(uiImage:passportData?.passportImage ?? UIImage(named:"head")!)
              .resizable()
              .renderingMode(.original)
              .aspectRatio(contentMode: .fit)
              .frame(width: 110, height: 170)
              .padding([.leading], 10.0)
            VStack {
              Text(passportData?.lastName ?? "").font(.system(size: 18))
              Text(passportData?.firstName ?? "").font(.system(size: 18))
              HStack {
                Text(passportData?.nationality ?? "").font(.system(size: 18))
                Text(passportData?.gender ?? "").font(.system(size: 18))
              }
              Text(passportData?.dateOfBirth ?? "").font(.system(size: 18))
              HStack {
                Text(passportData?.documentNumber ?? "").font(.system(size: 18))
              }
            }
          }
          HStack {
            Text(passportData?.personalNumber ?? "").font(.system(size: 16))
            Image(uiImage:passportData?.signatureImage ?? UIImage(named:"head")!)
              .resizable()
              .renderingMode(.original)
              .aspectRatio(contentMode: .fit)
              .frame(width: 70, height: 40)
              .padding([.leading], 10.0)
          }.padding(.bottom,8)
        }
        .padding()
        .frame(height: 210)
        .background(.white)
        .cornerRadius(20)
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .stroke(.black, lineWidth: 1)
        )
        .shadow(radius: 10)
        .padding(16)
    }
  }
}




